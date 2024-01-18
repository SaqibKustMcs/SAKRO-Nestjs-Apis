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
            debugger;
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
            console.log(err);
            throw new Error(err?.message);
        }
    }
}
