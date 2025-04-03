import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "7bbbaf1698763b",
    pass: "3df5315d6e236c"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({ subject, body }: SendMailData) {
      await transport.sendMail({
        from: 'Feedback Widget Team <hi@feedget.com>',
        to: 'Gabriel Gatti <gabrielgatti27@gmail.com>',
        subject,
        html: body,
      });
    }
}