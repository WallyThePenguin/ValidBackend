import express from 'express';
import { generateVerificationCode, sendEmailVerification } from '../util/mailUtil.js';
import { PrismaClient } from '../prisma/client/index.js';

const router = express.Router();
const prisma = new PrismaClient();
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

router.post('/sendverification', async (req, res) => {
  const  email  = req.body;
  const code =  generateVerificationCode();
  try {
    // Generate verification code
    await prisma.user.update({
        where: { email: email.email },
        data: { code: code },
      });
    // Send email verification
    await sendEmailVerification(email.email, code);

    res.status(200);
  } catch (error) {
    console.log(error);
    res.status(500);
  }
});

router.post('/verifyemail', async (req, res) => {
  const email = req.body;
  console.log(email)
  try {
    // Retrieve user by email and verification code
    const user = await prisma.user.findFirst({
      where: {
        email: email.email,
      },
    });
    if (user.everify == true) {
        await prisma.user.update({
            where: { email: email.email },
            data: { code: null },
        });
        return res.status(200).json({verified: true});
    }
    if (!user && (email.code == user.code)) {
        return res.status(400).json({success: false});
    }

    // Update user verification status
    await prisma.user.update({
      where: { email: email.email },
      data: { everify: true, code: null },
    });

    return res.status(200).json({ success: true});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to verify email.' });
  }
});

router.post('/sendpasswordreset', async (req, res) => {
  const { email } = req.body;

  try {
    // Generate verification code
    const { code, expiration} = generateVerificationCode();

    // Save verification code and expiration to the database
    await prisma.user.update({
      where: { email },
      data: { code, expiry: new Date(expiration) },
    });

    // Send password reset email
    await sendPasswordResetEmail(email, code);

    res.status(200).json({ message: 'Password reset email sent.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to send password reset email.' });
  }
});

router.post('/resetpassword', async (req, res) => {
  const { email, code, newPassword } = req.body;

  try {
    // Retrieve user by email and verification code
    const user = await prisma.user.findFirst({
      where: {
        email,
        code,
      },
    });

    if (!user) {
      res.status(400).json({ error: 'Invalid email or verification code.' });
      return;
    }

    // Check if the verification code has expired
    if (user.expiry && new Date() > user.expiry) {
      res.status(400).json({ error: 'Verification code has expired.' });
      return;
    }

    // Update user password
    await prisma.user.update({
      where: { email },
      data: { password: newPassword, code: null, expiry: null },
    });

    res.status(200).json({ message: 'Password reset successfully.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to reset password.' });
  }
});

export default router;
