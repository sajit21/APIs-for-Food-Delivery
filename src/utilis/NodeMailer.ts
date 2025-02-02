import * as nodemailer from "nodemailer";
import * as SendGrid from "nodemailer-sendgrid-transport";

export class NodeMailer {
  private static initiateTransport() {
    return nodemailer.createTransport(
      SendGrid({
        auth: {
          api_key: "SENDGRID_PASSWORD",
        },
      })
    );
  }

  static sendMail(data: {
    to: [string];
    subject: string;
    html: string;
  }): Promise<any> {
    return NodeMailer.initiateTransport().sendMail({
      from: "sajitmhr!2@gmail.com",
      to: data.to,
      subject: data.subject,
      html: data.html,
    });
  }
}
