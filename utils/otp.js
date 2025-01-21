import bcrypt from "bcrypt"

export function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString(); // 6-digit code
}

export function hashOtp(otp) {
  return bcrypt.hashSync(otp, 10);
}
