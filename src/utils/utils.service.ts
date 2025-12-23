import { BadRequestException, Injectable } from '@nestjs/common';
import { SendEmailDTO } from '../auth/dto/sendEmail.dto';
const Mailgun = require('mailgun.js');
const formData = require('form-data');
const Mailjet = require('node-mailjet');

@Injectable()
export class UtilsService {
    private mailjet;

    constructor() {
        this.mailjet = new Mailjet({
            apiKey: process.env.MAILJET_API_KEY,
            apiSecret: process.env.MAILJET_API_SECRET,
        });
    }


    async sendEmail(emailDto: SendEmailDTO) {
        try {
            // Check if Mailjet is configured (not dummy values)
            const isMailjetConfigured = process.env.MAILJET_API_KEY && 
                                       process.env.MAILJET_API_KEY !== '0' &&
                                       process.env.MAILJET_API_KEY !== 'dummy-key-not-configured';
            
            if (!isMailjetConfigured) {
                // Development mode - log OTP instead of sending email
                // Extract OTP from HTML content - try multiple patterns
                let otp = 'Not found';
                
                // Pattern 1: <strong>${otp}</strong>
                let otpMatch = emailDto.html.match(/<strong[^>]*>\s*(\d{6})\s*<\/strong>/i);
                if (otpMatch) {
                    otp = otpMatch[1];
                }
                
                // Pattern 2: After "verification code:"
                if (otp === 'Not found') {
                    otpMatch = emailDto.html.match(/verification code:.*?(\d{6})/is);
                    if (otpMatch) {
                        otp = otpMatch[1];
                    }
                }
                
                // Pattern 3: Any 6-digit number in the HTML
                if (otp === 'Not found') {
                    otpMatch = emailDto.html.match(/(\d{6})/);
                    if (otpMatch) {
                        otp = otpMatch[1];
                    }
                }
                
                console.log('\n' + '='.repeat(60));
                console.log('📧 EMAIL NOT SENT (Development Mode)');
                console.log('='.repeat(60));
                console.log(`📬 To: ${emailDto.to}`);
                console.log(`📋 Subject: ${emailDto.subject}`);
                console.log('─'.repeat(60));
                console.log(`🔑 VERIFICATION CODE: ${otp}`);
                console.log('─'.repeat(60));
                console.log('⏰ Valid for: 2 minutes');
                console.log('');
                console.log('⚠️  IMPORTANT: Emails are NOT sent in development mode!');
                console.log('   You will NOT receive this email in your inbox.');
                console.log('   Use the code above from this console output.');
                console.log('');
                console.log('💡 Tip: Configure Mailjet to send real emails');
                console.log('📖 See: EMAIL_CONFIGURATION_GUIDE.md');
                console.log('🔗 API: GET http://localhost:3000/auth/dev/otps');
                console.log('='.repeat(60) + '\n');
                
                // Return mock success response
                return {
                    Messages: [{
                        Status: 'success',
                        To: [{ Email: emailDto.to }]
                    }]
                };
            }
            
            // Production mode - send actual email
            const request = await this.mailjet.post('send', { version: 'v3.1' }).request({
                Messages: [
                    {
                        From: {
                            Email: process.env.MAILJET_EMAIL,
                            Name: process.env.MAILJET_NAME,
                        },
                        To: [
                            {
                                Email: emailDto.to,
                                Name: "Blockyfy",
                            },
                        ],
                        Subject: emailDto.subject,
                        TextPart: emailDto.text,
                        HTMLPart: emailDto.html,
                    }
                ]
            });

            return request.body;
        } catch (err) {
            console.log('Email sending error:', err);
            throw new Error(err?.message);
        }
    }
}
