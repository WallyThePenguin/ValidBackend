import formData from 'form-data';
import Mailgun from 'mailgun.js';

const mailgun = new Mailgun(formData);
const domain = 'autovalid.tech';
const key = `key-a6941833d5355f903f4de2a20230178b`
const from = 'Valid <noreply@autovalid.tech>'
const mg = mailgun.client({ username: 'api', key: key});

export const sendEmailVerification = async (recipient, codeKey) => {
  const data = {
    from: from,
    to: recipient,
    subject: 'Email Verification',
    text: `Please verify your email with code: ${codeKey}`,
    html: `<p>Please verify your email with code: <strong>${codeKey}</strong></p>`,
  };

  try {
    const response = await mg.messages.create(domain, data);
  } catch (error) {
    console.error(error);
  }
};

export const sendPasswordResetEmail = async (recipient, resetToken) => {
  const data = {
    from: from,
    to: recipient,
    subject: 'Password Reset',
    text: `Please reset your password using this token: ${resetToken} \n It will expire in 10 minutes.`,
    html: `<p>Please reset your password using this token: <strong>${resetToken}</strong> \n It will expire in 10 minutes.</p>`,
  };

  try {
    const response = await mg.messages.create(domain, data);
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

export const generateVerificationCode = () => {
  const code = Math.floor(100000 + Math.random() * 900000); // Generate a random 6-digit code

  return code.toString();
};
