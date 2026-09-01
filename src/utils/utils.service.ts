import { BadRequestException, Injectable, Logger } from '@nestjs/common';
import * as ejs from 'ejs';
import * as nodemailer from 'nodemailer';
import * as path from 'path';

@Injectable()
export class UtilsService {
  private readonly logger = new Logger(UtilsService.name);
  private transporter: nodemailer.Transporter | null = null;

  /** True when SMTP env vars are set so real emails can be sent. */
  isSmtpConfigured(): boolean {
    const host = process.env.SMTP_HOST?.trim();
    const user = process.env.SMTP_USER?.trim();
    const pass = process.env.SMTP_PASS?.trim();
    return Boolean(host && user && pass);
  }

  /** Send signup / email-verification OTP. */
  async sendVerificationEmail(
    email: string,
    otp: string,
    recipientName: string,
  ): Promise<void> {
    await this.sendTemplatedOtpEmail({
      to: email,
      otp,
      recipientName,
      template: 'verify-email.ejs',
      subject: 'Confirm your email',
      text: `Your email verification code is: ${otp}`,
    });
  }

  /** Send forgot-password OTP. */
  async sendResetPasswordEmail(
    email: string,
    otp: string,
    recipientName: string,
  ): Promise<void> {
    await this.sendTemplatedOtpEmail({
      to: email,
      otp,
      recipientName,
      template: 'reset-password.ejs',
      subject: 'Reset Password Request',
      text: `Your OTP is: ${otp}`,
    });
  }

  private getTransporter(): nodemailer.Transporter | null {
    if (!this.isSmtpConfigured()) {
      return null;
    }
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
      });
    }
    return this.transporter;
  }

  private getFromAddress(): string {
    const fromName = process.env.SMTP_FROM?.trim() || 'JHAMAT';
    const fromEmail =
      process.env.SMTP_FROM_EMAIL?.trim() ||
      process.env.SMTP_USER?.trim() ||
      'no-reply@jhamat.app';
    return `"${fromName}" <${fromEmail}>`;
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

  private logDevOtp(
    to: string,
    subject: string,
    otp: string,
  ): void {
    console.log('\n' + '='.repeat(60));
    console.log('📧 EMAIL NOT SENT (Development Mode — SMTP not configured)');
    console.log('='.repeat(60));
    console.log(`📬 To: ${to}`);
    console.log(`📋 Subject: ${subject}`);
    console.log('─'.repeat(60));
    console.log(`🔑 VERIFICATION CODE: ${otp}`);
    console.log('─'.repeat(60));
    console.log('⏰ Valid for: 2 minutes');
    console.log('');
    console.log('⚠️  Configure SMTP_HOST, SMTP_USER, SMTP_PASS on Render to send real emails.');
    console.log('🔗 API: GET http://localhost:3000/auth/dev/otps');
    console.log('='.repeat(60) + '\n');
  }

  private async sendTemplatedOtpEmail(options: {
    to: string;
    otp: string;
    recipientName: string;
    template: string;
    subject: string;
    text: string;
  }): Promise<void> {
    const { to, otp, recipientName, template, subject, text } = options;

    const htmlContent = await this.renderTemplate(template, {
      otp,
      recipient_name: recipientName,
    });

    const transporter = this.getTransporter();
    if (!transporter) {
      this.logDevOtp(to, subject, otp);
      return;
    }

    try {
      await transporter.sendMail({
        from: this.getFromAddress(),
        to,
        subject,
        text,
        html: htmlContent,
      });
      this.logger.log(`Email sent to ${to} (${subject})`);
    } catch (err) {
      this.logger.error(
        `Email send failed: ${err instanceof Error ? err.message : err}`,
      );
      throw new BadRequestException('Failed to send email');
    }
  }
}
