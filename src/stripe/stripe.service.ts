import {
  BadRequestException,
  ForbiddenException,
  HttpException,
  HttpStatus,
  Injectable,
  Logger,
  NotFoundException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import Stripe from 'stripe';
import {
  EcommerceOrder,
  EcommerceOrderDocument,
} from 'src/schema/ecommerce-order/ecommerce-order.schema';
import { Shop } from 'src/interface/shop/shop.interface';
import { User } from 'src/interface/user/user.interface';

@Injectable()
export class StripeService {
  private readonly logger = new Logger(StripeService.name);
  private stripe: Stripe | null = null;
  private readonly configured: boolean;

  constructor(
    @InjectModel(EcommerceOrder.name)
    private readonly orderModel: Model<EcommerceOrderDocument>,
    @InjectModel('Shop') private readonly shopModel: Model<Shop>,
    @InjectModel('User') private readonly userModel: Model<User>,
  ) {
    const secret = process.env.STRIPE_SECRET_KEY?.trim();
    if (secret) {
      this.stripe = new Stripe(secret);
      this.configured = true;
      this.logger.log('Stripe configured');
    } else {
      this.configured = false;
      this.logger.warn('STRIPE_SECRET_KEY missing — card payments disabled');
    }
  }

  get isConfigured(): boolean {
    return this.configured;
  }

  getPublishableKey(): string {
    return process.env.STRIPE_PUBLISHABLE_KEY?.trim() || '';
  }

  getPlatformFeePercent(): number {
    const raw = process.env.PLATFORM_FEE_PERCENT?.trim();
    const parsed = raw ? parseFloat(raw) : 5;
    return Number.isFinite(parsed) && parsed >= 0 ? parsed : 5;
  }

  getMerchantCountryCode(): string {
    return process.env.STRIPE_MERCHANT_COUNTRY?.trim().toUpperCase() || 'US';
  }

  getMerchantName(): string {
    return process.env.STRIPE_MERCHANT_NAME?.trim() || 'JHAMAT';
  }

  getAppleMerchantId(): string {
    return (
      process.env.STRIPE_APPLE_MERCHANT_ID?.trim() ||
      'merchant.com.app.clothShopFlutter'
    );
  }

  isGooglePayTestEnv(): boolean {
    return process.env.STRIPE_GOOGLE_PAY_TEST_ENV !== 'false';
  }

  /** Public currency for mobile wallet config (defaults to usd). */
  getStripeCurrency(): string {
    return this.resolveCurrency();
  }

  private isOnlinePaymentMethod(method: string): boolean {
    return ['stripe', 'applePay', 'googlePay'].includes(method);
  }

  private client(): Stripe {
    if (!this.stripe) {
      throw new HttpException(
        'Stripe is not configured. Add STRIPE_SECRET_KEY and STRIPE_PUBLISHABLE_KEY.',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
    return this.stripe;
  }

  private resolveCurrency(orderCurrency?: string): string {
    return (
      process.env.STRIPE_CURRENCY?.trim().toLowerCase() ||
      orderCurrency?.trim().toLowerCase() ||
      'usd'
    );
  }

  private toCents(amount: number): number {
    return Math.max(0, Math.round(amount * 100));
  }

  private getPublicBaseUrl(): string {
    return (
      process.env.RENDER_EXTERNAL_URL?.trim() ||
      process.env.URL?.trim()?.replace(/\/$/, '') ||
      'http://localhost:3000'
    );
  }

  async getOrCreateCustomer(userId: string, email?: string): Promise<string> {
    const stripe = this.client();
    const user = await this.userModel.findById(userId).exec();
    if (!user) throw new NotFoundException('User not found');

    const existing = (user as any).stripeCustomerId as string | undefined;
    if (existing) return existing;

    const customer = await stripe.customers.create({
      email: email || user.email || undefined,
      name: user.fullName || user.name || undefined,
      metadata: { userId },
    });

    await this.userModel
      .updateOne({ _id: userId }, { $set: { stripeCustomerId: customer.id } })
      .exec();

    return customer.id;
  }

  /** Seller: create or resume Stripe Connect Express onboarding. */
  async createConnectOnboardingLink(
    shopId: string,
    ownerId: string,
    refreshUrl?: string,
    returnUrl?: string,
  ) {
    const stripe = this.client();
    const shop = await this.shopModel.findById(shopId).exec();
    if (!shop) throw new NotFoundException('Shop not found');
    if (shop.ownerId !== ownerId && (shop as any).user !== ownerId) {
      throw new ForbiddenException('Only the shop owner can connect Stripe');
    }

    const owner = await this.userModel.findById(ownerId).exec();
    let accountId = shop.stripeAccountId;

    if (!accountId) {
      const country =
        process.env.STRIPE_CONNECT_COUNTRY?.trim().toUpperCase() || 'US';
      const account = await stripe.accounts.create({
        type: 'express',
        country,
        email: owner?.email || undefined,
        capabilities: {
          card_payments: { requested: true },
          transfers: { requested: true },
        },
        business_type: 'individual',
        metadata: { shopId, ownerId },
      });
      accountId = account.id;
      await this.shopModel
        .updateOne(
          { _id: shopId },
          { $set: { stripeAccountId: accountId } },
        )
        .exec();
    }

    const base = this.getPublicBaseUrl();
    const link = await stripe.accountLinks.create({
      account: accountId,
      refresh_url: refreshUrl || `${base}/stripe/connect/refresh?shopId=${shopId}`,
      return_url: returnUrl || `${base}/stripe/connect/return?shopId=${shopId}`,
      type: 'account_onboarding',
    });

    return { url: link.url, accountId };
  }

  /** Seller: check Connect onboarding / payout status. */
  async getConnectStatus(shopId: string, ownerId: string) {
    const shop = await this.shopModel.findById(shopId).exec();
    if (!shop) throw new NotFoundException('Shop not found');
    if (shop.ownerId !== ownerId && (shop as any).user !== ownerId) {
      throw new ForbiddenException('Only the shop owner can view Stripe status');
    }

    if (!shop.stripeAccountId) {
      return {
        connected: false,
        onboardingComplete: false,
        payoutsEnabled: false,
        chargesEnabled: false,
        accountId: null,
      };
    }

    const stripe = this.client();
    const account = await stripe.accounts.retrieve(shop.stripeAccountId);

    const onboardingComplete = account.details_submitted === true;
    const payoutsEnabled = account.payouts_enabled === true;
    const chargesEnabled = account.charges_enabled === true;

    await this.shopModel
      .updateOne(
        { _id: shopId },
        {
          $set: {
            stripeOnboardingComplete: onboardingComplete,
            stripePayoutsEnabled: payoutsEnabled,
          },
        },
      )
      .exec();

    return {
      connected: true,
      onboardingComplete,
      payoutsEnabled,
      chargesEnabled,
      accountId: shop.stripeAccountId,
    };
  }

  /** Buyer: create PaymentIntent with 5% platform fee → seller Connect account. */
  async createPaymentIntent(orderId: string, buyerId: string) {
    const stripe = this.client();
    const order = await this.orderModel
      .findOne({ id: orderId, isDeleted: false })
      .exec();
    if (!order) throw new NotFoundException('Order not found');
    if (order.buyerId !== buyerId) {
      throw new ForbiddenException('Not your order');
    }
    if (!this.isOnlinePaymentMethod(order.paymentMethod)) {
      throw new BadRequestException('Order is not an online payment order');
    }
    if (order.paymentStatus === 'paid') {
      throw new BadRequestException('Order is already paid');
    }

    const shop = await this.shopModel.findById(order.shopId).exec();
    if (!shop?.stripeAccountId) {
      throw new BadRequestException(
        'Seller has not connected Stripe yet. Choose Cash on Delivery or try another shop.',
      );
    }

    const status = await this.getConnectStatus(shop._id.toString(), shop.ownerId);
    if (!status.chargesEnabled) {
      throw new BadRequestException(
        'Seller Stripe account is not ready to accept payments yet.',
      );
    }

    const currency = this.resolveCurrency(order.currency);
    const amountCents = this.toCents(order.total);
    if (amountCents < 50) {
      throw new BadRequestException('Order total is too small for card payment');
    }

    const feePercent = this.getPlatformFeePercent();
    const platformFeeCents = Math.round(amountCents * (feePercent / 100));
    const sellerPayoutCents = amountCents - platformFeeCents;

    const buyer = await this.userModel.findById(buyerId).exec();
    const customerId = await this.getOrCreateCustomer(
      buyerId,
      buyer?.email,
    );

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amountCents,
      currency,
      customer: customerId,
      automatic_payment_methods: { enabled: true },
      setup_future_usage: 'off_session',
      application_fee_amount: platformFeeCents,
      transfer_data: { destination: shop.stripeAccountId },
      metadata: {
        orderId: order.id,
        shopId: order.shopId,
        buyerId: order.buyerId,
        sellerId: order.sellerId,
      },
    });

    order.paymentIntentId = paymentIntent.id;
    order.platformFee = platformFeeCents / 100;
    order.sellerPayout = sellerPayoutCents / 100;
    await order.save();

    return {
      clientSecret: paymentIntent.client_secret,
      paymentIntentId: paymentIntent.id,
      publishableKey: this.getPublishableKey(),
      amount: order.total,
      currency: currency.toUpperCase(),
      platformFee: order.platformFee,
      sellerPayout: order.sellerPayout,
      platformFeePercent: feePercent,
    };
  }

  /** Buyer: confirm payment after Payment Sheet succeeds. */
  async confirmPayment(
    orderId: string,
    paymentIntentId: string,
    buyerId: string,
  ) {
    const stripe = this.client();
    const order = await this.orderModel
      .findOne({ id: orderId, isDeleted: false })
      .exec();
    if (!order) throw new NotFoundException('Order not found');
    if (order.buyerId !== buyerId) {
      throw new ForbiddenException('Not your order');
    }

    const pi = await stripe.paymentIntents.retrieve(paymentIntentId);
    if (pi.metadata?.orderId !== orderId) {
      throw new BadRequestException('Payment intent does not match order');
    }
    if (pi.status !== 'succeeded') {
      throw new BadRequestException(`Payment not completed (status: ${pi.status})`);
    }

    order.paymentIntentId = paymentIntentId;
    order.paymentStatus = 'paid';
    order.status = 'confirmed';
    await order.save();

    return order;
  }

  constructWebhookEvent(rawBody: Buffer, signature: string): Stripe.Event {
    const secret = process.env.STRIPE_WEBHOOK_SECRET?.trim();
    if (!secret) {
      throw new HttpException(
        'STRIPE_WEBHOOK_SECRET not configured',
        HttpStatus.SERVICE_UNAVAILABLE,
      );
    }
    return this.client().webhooks.constructEvent(rawBody, signature, secret);
  }

  async handleWebhookEvent(event: Stripe.Event): Promise<void> {
    switch (event.type) {
      case 'payment_intent.succeeded': {
        const pi = event.data.object as Stripe.PaymentIntent;
        const orderId = pi.metadata?.orderId;
        if (!orderId) return;
        await this.orderModel
          .updateOne(
            { id: orderId },
            {
              $set: {
                paymentStatus: 'paid',
                paymentIntentId: pi.id,
                status: 'confirmed',
              },
            },
          )
          .exec();
        break;
      }
      case 'payment_intent.payment_failed': {
        const pi = event.data.object as Stripe.PaymentIntent;
        const orderId = pi.metadata?.orderId;
        if (!orderId) return;
        await this.orderModel
          .updateOne({ id: orderId }, { $set: { paymentStatus: 'failed' } })
          .exec();
        break;
      }
      case 'account.updated': {
        const account = event.data.object as Stripe.Account;
        await this.shopModel
          .updateMany(
            { stripeAccountId: account.id },
            {
              $set: {
                stripeOnboardingComplete: account.details_submitted === true,
                stripePayoutsEnabled: account.payouts_enabled === true,
              },
            },
          )
          .exec();
        break;
      }
      default:
        this.logger.debug(`Unhandled Stripe event: ${event.type}`);
    }
  }
}
