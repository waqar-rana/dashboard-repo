import { NextResponse } from 'next/server';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import bcrypt from "bcrypt"

export async function POST(req) {
  const { email, otp } = await req.json();
  await dbConnect();

  // Find user and verify OTP
  const user = await User.findOne({ email });
  if (!user) {
    return NextResponse.json({ error: 'User does not Exist' }, { status: 400 });
  }
  if (!user.otp) {
    return NextResponse.json({ error: 'OTP is invalid' }, { status: 400 });
  }
  if (Date.now() > user.otpExpires) {
    return NextResponse.json({ error: 'OTP is expired.' }, { status: 400 });
  }

const isMatch = await bcrypt.compare(otp, user.otp)
  if (!isMatch) {
    return NextResponse.json({ error: 'Incorrect OTP.' }, { status: 400 });
  }

  // Clear OTP on successful verification
  const newPassword = await bcrypt.hash('123456', 10);
  await User.updateOne({ email }, { password: newPassword, $unset: { otp: '', otpExpires: '' } });

  return NextResponse.json({ message: 'OTP Verified and Password Reset to Default (123456).' });
}
