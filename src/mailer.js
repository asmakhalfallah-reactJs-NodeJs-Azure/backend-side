import nodemailer from "nodemailer";
import dotenv from "dotenv";

const from = '"PDF_CONVERT" <info@pdf_convert.com>';

function setup() {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS 
    }
  });
}

export function sendConfirmationEmail(user) {
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Welcome to PDF CONVERTOR",
    text: `
    Welcome to PDF CONVERTOR. If you face any problem  please contact us at:  convertpdf.mazars@gmail.com
    _____________________________________________________________________________________________________

     You're receiving this email because you recently created a new Convert PDF account or added a new email address . 

     If this wasn't you , please ignore this email . 
    `
  };

  transport.sendMail(email);
}

export function sendResetPasswordEmail(user){
  const transport = setup();
  const email = {
    from,
    to: user.email,
    subject: "Reset Password",
    text: `
    To reset password follow this link
            
    ${user.generateResetPasswordLink()}
    `
  };

  transport.sendMail(email);
}
