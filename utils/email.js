import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT === '465', // true for SSL, false for TLS
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendOtpEmail(to, otp) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject: 'Password Reset',
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #fff; background-color: #333; ">
          <h2 style="color: #fff;">Password Reset Code</h2>
          <p style="color: #fff;">Dear user,</p>
          <p style="color: #fff;">Your Password Reset code is:</p>
          <h1 style="background: #222; padding: 10px; border-radius: 8px; text-align: center; color: #f0b90b;">${otp}</h1>
          <p style="color: #fff;">The verification code will be valid for <strong style="color: #f0b90b;">5 minutes</strong>. We will never ask you to share this code with us. Do not share this code with anyone.</p>
          <p style="color: #fff;">If you didn’t request this, please ignore this email.</p>
          <p style="color: #fff;"><em>This is an automated message, please do not reply. Thank you!</em></p>
        </div>
      `,
    });
    console.log('OTP sent successfully');
  } catch (error) {
    console.error('Error sending OTP:', error);
  }
}
