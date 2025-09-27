import nodemailer from 'nodemailer';
import { config } from './config';

const transporter = nodemailer.createTransport({
  host: config.email.host,
  port: config.email.port,
  secure: false,
  auth: {
    user: config.email.user,
    pass: config.email.password,
  },
});

export async function sendVerificationEmail(email: string, token: string) {
  const verifyUrl = `${config.nextAuthUrl}/api/auth/verify-email?token=${token}&email=${email}`;
  
  const mailOptions = {
    from: config.email.from,
    to: email,
    subject: 'Vérifiez votre email - PYPYSKILL',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h1 style="color: #333; text-align: center;">Bienvenue sur PYPYSKILL!</h1>
        <p style="color: #666; font-size: 16px;">
          Merci de vous être inscrit. Pour activer votre compte, veuillez cliquer sur le lien ci-dessous :
        </p>
        <div style="text-align: center; margin: 30px 0;">
          <a href="${verifyUrl}" 
             style="background-color: #2d8cf0; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold;">
            Vérifier mon email
          </a>
        </div>
        <p style="color: #999; font-size: 14px;">
          Si le bouton ne fonctionne pas, copiez et collez ce lien dans votre navigateur :<br>
          <a href="${verifyUrl}">${verifyUrl}</a>
        </p>
        <p style="color: #999; font-size: 12px; margin-top: 30px;">
          Ce lien expire dans 24 heures.
        </p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    return true;
  } catch (error) {
    console.error('Erreur envoi email:', error);
    return false;
  }
}
