import { Injectable, Logger } from '@nestjs/common';
import * as ejs from 'ejs';
import * as nodemailer from 'nodemailer';
import * as path from 'path';

const Mailjet = require('node-mailjet');

/** Max wait for SMTP connect/send — avoids hanging API requests. */
const SMTP_TIMEOUT_MS = 8_000;

type EmailProvider = 'resend' | 'mailjet' | 'smtp' | 'none';

@Injectable()
export class UtilsService {
  private readonly logger = new Logger(UtilsService.name);
  private transporter: nodemailer.Transporter | null = null;
  private mailjetClient: ReturnType<typeof Mailjet.apiConnect> | null = null;

  /** True when any real email provider is configured. */
  isEmailConfigured(): boolean {
    return this.resolveProvider() !== 'none';
  }

  /** @deprecated use isEmailConfigured */
  isSmtpConfigured(): boolean {
    return this.resolveProvider() === 'smtp';
  }

  /** Fire-and-forget — never blocks the HTTP response. */
  queueVerificationEmail(
    email: string,
    otp: string,
    recipientName: string,
    traceId?: string,
  ): void {
    const tid = traceId ?? `email-${Date.now()}`;
    this.emailStep(tid, 1, 'queueVerificationEmail — background job started', {
      to: email,
      otp,
    });
    void this.sendVerificationEmail(email, otp, recipientName, tid).catch((err) => {
      this.emailStep(tid, 99, 'FAIL — verification email background job', {
        error: err instanceof Error ? err.message : String(err),
      });
      this.logger.error(
        `[${tid}] Verification email failed for ${email}: ${err instanceof Error ? err.message : err}`,
        err instanceof Error ? err.stack : undefined,
      );
    });
  }

  /** Fire-and-forget — never blocks the HTTP response. */
  queueResetPasswordEmail(
    email: string,
    otp: string,
    recipientName: string,
  ): void {
    void this.sendResetPasswordEmail(email, otp, recipientName).catch((err) => {
      this.logger.error(
        `Reset-password email failed for ${email}: ${err instanceof Error ? err.message : err}`,
      );
    });
  }

  async sendVerificationEmail(
    email: string,
    otp: string,
    recipientName: string,
    traceId?: string,
  ): Promise<void> {
    const tid = traceId ?? `email-${Date.now()}`;
    this.emailStep(tid, 2, 'sendVerificationEmail — start');
    await this.sendTemplatedOtpEmail(
      {
        to: email,
        otp,
        recipientName,
        template: 'verify-email.ejs',
        subject: 'Confirm your email',
        text: `Your email verification code is: ${otp}`,
      },
      tid,
    );
  }

  async sendResetPasswordEmail(
    email: string,
    otp: string,
    recipientName: string,
  ): Promise<void> {
    const traceId = `reset-${Date.now()}`;
    await this.sendTemplatedOtpEmail(
      {
        to: email,
        otp,
        recipientName,
        template: 'reset-password.ejs',
        subject: 'Reset Password Request',
        text: `Your OTP is: ${otp}`,
      },
      traceId,
    );
  }

  private emailStep(
    traceId: string,
    step: number,
    msg: string,
    extra?: Record<string, unknown>,
  ): void {
    this.logger.log(
      `[${traceId}][email step ${step}] ${msg}${
        extra ? ` ${JSON.stringify(extra)}` : ''
      }`,
    );
  }

  private emailConfigSnapshot(): Record<string, unknown> {
    return {
      EMAIL_PROVIDER: process.env.EMAIL_PROVIDER?.trim() || 'auto',
      RENDER: Boolean(process.env.RENDER),
      resendKeySet: this.isResendConfigured(),
      mailjetKeySet: this.isMailjetConfigured(),
      smtpHost: process.env.SMTP_HOST?.trim() || '(not set)',
      smtpPort: process.env.SMTP_PORT?.trim() || '587',
      smtpUserSet: Boolean(process.env.SMTP_USER?.trim()),
      smtpPassSet: Boolean(process.env.SMTP_PASS?.trim()),
      resolvedProvider: this.resolveProvider(),
    };
  }

  private isResendConfigured(): boolean {
    const key = process.env.RESEND_API_KEY?.trim();
    return Boolean(key && key !== 'dummy-key-not-configured');
  }

  private isMailjetConfigured(): boolean {
    const key = process.env.MAILJET_API_KEY?.trim();
    const secret = process.env.MAILJET_API_SECRET?.trim();
    return Boolean(
      key &&
        secret &&
        key !== '0' &&
        key !== 'dummy-key-not-configured',
    );
  }

  private hasSmtpCredentials(): boolean {
    return Boolean(
      process.env.SMTP_HOST?.trim() &&
        process.env.SMTP_USER?.trim() &&
        process.env.SMTP_PASS?.trim(),
    );
  }

  /**
   * Render free tier blocks outbound SMTP (ports 25/465/587).
   * Prefer HTTPS providers (Resend / Mailjet) on Render.
   */
  private resolveProvider(): EmailProvider {
    const forced = process.env.EMAIL_PROVIDER?.trim().toLowerCase();

    if (forced === 'resend') {
      return this.isResendConfigured() ? 'resend' : 'none';
    }
    if (forced === 'mailjet') {
      return this.isMailjetConfigured() ? 'mailjet' : 'none';
    }
    if (forced === 'smtp') {
      return this.hasSmtpCredentials() ? 'smtp' : 'none';
    }

    // auto — HTTPS first (works on Render free tier)
    if (this.isResendConfigured()) return 'resend';
    if (this.isMailjetConfigured()) return 'mailjet';
    if (this.hasSmtpCredentials()) {
      if (process.env.RENDER) {
        this.logger.warn(
          'SMTP is set but Render blocks ports 587/465 on free tier. ' +
            'Add RESEND_API_KEY or MAILJET keys, upgrade Render, or remove SMTP vars.',
        );
        return 'none';
      }
      return 'smtp';
    }
    return 'none';
  }

  private getFromAddress(): string {
    const fromName = process.env.SMTP_FROM?.trim() || 'JHAMAT';
    const fromEmail =
      process.env.SMTP_FROM_EMAIL?.trim() ||
      process.env.RESEND_FROM_EMAIL?.trim() ||
      process.env.MAILJET_EMAIL?.trim() ||
      process.env.SMTP_USER?.trim() ||
      'no-reply@jhamat.app';
    return `"${fromName}" <${fromEmail}>`;
  }

  private getFromEmailOnly(): string {
    const match = this.getFromAddress().match(/<([^>]+)>/);
    return match?.[1] ?? process.env.SMTP_USER?.trim() ?? 'no-reply@jhamat.app';
  }

  private templatePath(filename: string): string {
    return path.join(__dirname, '../templates', filename);
  }

  private async renderTemplate(
    filename: string,
    data: { otp: string; recipient_name: string },
  ): Promise<string> {
    return ejs.renderFile(this.templatePath(filename), data);
  }

  private logDevOtp(to: string, subject: string, otp: string): void {
    console.log('\n' + '='.repeat(60));
    console.log('📧 EMAIL NOT SENT (no working email provider)');
    console.log('='.repeat(60));
    console.log(`📬 To: ${to}`);
    console.log(`📋 Subject: ${subject}`);
    console.log('─'.repeat(60));
    console.log(`🔑 VERIFICATION CODE: ${otp}`);
    console.log('─'.repeat(60));
    console.log('⏰ Valid for: 2 minutes');
    if (process.env.RENDER && this.hasSmtpCredentials()) {
      console.log('');
      console.log(
        '⚠️  Render free tier blocks SMTP (587/465). Use RESEND_API_KEY on Render instead.',
      );
    } else {
      console.log('');
      console.log(
        '⚠️  Set RESEND_API_KEY, MAILJET keys, or SMTP_* to send real emails.',
      );
    }
    console.log('🔗 API: GET /auth/dev/otps');
    console.log('='.repeat(60) + '\n');
  }

  private getTransporter(): nodemailer.Transporter {
    if (!this.transporter) {
      const port = Number(process.env.SMTP_PORT ?? 587);
      const secure =
        process.env.SMTP_SECURE === 'true' || port === 465;
      this.transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port,
        secure,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
        connectionTimeout: SMTP_TIMEOUT_MS,
        greetingTimeout: SMTP_TIMEOUT_MS,
        socketTimeout: SMTP_TIMEOUT_MS,
      });
    }
    return this.transporter;
  }

  private getMailjetClient() {
    if (!this.mailjetClient) {
      this.mailjetClient = Mailjet.apiConnect(
        process.env.MAILJET_API_KEY,
        process.env.MAILJET_API_SECRET,
      );
    }
    return this.mailjetClient;
  }

  private async sendViaResend(
    options: {
      to: string;
      subject: string;
      text: string;
      html: string;
    },
    traceId: string,
  ): Promise<void> {
    const from = this.getFromEmailOnly();
    this.emailStep(traceId, 7, 'sendViaResend — POST https://api.resend.com/emails', {
      from,
      to: options.to,
    });
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to: [options.to],
        subject: options.subject,
        text: options.text,
        html: options.html,
      }),
      signal: AbortSignal.timeout(SMTP_TIMEOUT_MS),
    });

    if (!res.ok) {
      const body = await res.text().catch(() => '');
      this.emailStep(traceId, 7, 'FAIL — Resend API error', {
        status: res.status,
        body: body.slice(0, 200),
      });
      throw new Error(`Resend HTTP ${res.status}: ${body.slice(0, 200)}`);
    }
    this.emailStep(traceId, 7, 'OK — Resend accepted message');
  }

  private async sendViaMailjet(
    options: {
      to: string;
      subject: string;
      text: string;
      html: string;
    },
    traceId: string,
  ): Promise<void> {
    const fromEmail =
      process.env.MAILJET_EMAIL?.trim() || this.getFromEmailOnly();
    const fromName = process.env.MAILJET_NAME?.trim() || 'JHAMAT';
    this.emailStep(traceId, 7, 'sendViaMailjet — POST Mailjet v3.1/send', {
      fromEmail,
      to: options.to,
    });

    await this.getMailjetClient()
      .post('send', { version: 'v3.1' })
      .request({
        Messages: [
          {
            From: { Email: fromEmail, Name: fromName },
            To: [{ Email: options.to }],
            Subject: options.subject,
            TextPart: options.text,
            HTMLPart: options.html,
          },
        ],
      });
    this.emailStep(traceId, 7, 'OK — Mailjet accepted message');
  }

  private async sendViaSmtp(
    options: {
      to: string;
      subject: string;
      text: string;
      html: string;
    },
    traceId: string,
  ): Promise<void> {
    const port = Number(process.env.SMTP_PORT ?? 587);
    this.emailStep(traceId, 7, 'sendViaSmtp — connecting…', {
      host: process.env.SMTP_HOST,
      port,
      timeoutMs: SMTP_TIMEOUT_MS,
      to: options.to,
    });
    try {
      await this.getTransporter().sendMail({
        from: this.getFromAddress(),
        to: options.to,
        subject: options.subject,
        text: options.text,
        html: options.html,
      });
      this.emailStep(traceId, 7, 'OK — SMTP sendMail completed');
    } catch (err) {
      this.transporter = null;
      this.emailStep(traceId, 7, 'FAIL — SMTP sendMail error', {
        error: err instanceof Error ? err.message : String(err),
      });
      throw err;
    }
  }

  private async dispatchEmail(
    options: {
      to: string;
      subject: string;
      text: string;
      html: string;
    },
    traceId: string,
  ): Promise<void> {
    const provider = this.resolveProvider();
    this.emailStep(traceId, 6, 'dispatchEmail — provider selected', { provider });
    switch (provider) {
      case 'resend':
        await this.sendViaResend(options, traceId);
        break;
      case 'mailjet':
        await this.sendViaMailjet(options, traceId);
        break;
      case 'smtp':
        await this.sendViaSmtp(options, traceId);
        break;
      default:
        this.emailStep(traceId, 6, 'SKIP — no provider (dev log only)');
        return;
    }
  }

  private async sendTemplatedOtpEmail(
    options: {
      to: string;
      otp: string;
      recipientName: string;
      template: string;
      subject: string;
      text: string;
    },
    traceId: string,
  ): Promise<void> {
    const { to, otp, recipientName, template, subject, text } = options;

    this.emailStep(traceId, 3, 'email config snapshot', this.emailConfigSnapshot());

    const templateFile = this.templatePath(template);
    this.emailStep(traceId, 4, 'renderTemplate — start', { templateFile });
    const htmlContent = await this.renderTemplate(template, {
      otp,
      recipient_name: recipientName,
    });
    this.emailStep(traceId, 4, 'OK — template rendered', {
      htmlLength: htmlContent.length,
    });

    const provider = this.resolveProvider();
    if (provider === 'none') {
      this.emailStep(traceId, 5, 'No provider — logging OTP to console (dev mode)');
      this.logDevOtp(to, subject, otp);
      return;
    }

    this.emailStep(traceId, 5, 'dispatchEmail — start', { provider, subject });
    await this.dispatchEmail(
      {
        to,
        subject,
        text,
        html: htmlContent,
      },
      traceId,
    );
    this.emailStep(traceId, 8, 'SUCCESS — email sent', { to, provider, subject });
  }
}
