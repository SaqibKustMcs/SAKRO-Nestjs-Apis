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
                console.log('\n========================================');
                console.log('📧 EMAIL NOT SENT (Development Mode)');
                console.log('To:', emailDto.to);
                console.log('Subject:', emailDto.subject);
                console.log('HTML Content:', emailDto.html);
                console.log('========================================\n');
                
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
