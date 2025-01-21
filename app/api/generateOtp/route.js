import { NextResponse } from 'next/server';
import { generateOTP, hashOtp } from '@/utils/otp';
import dbConnect from '@/lib/mongodb';
import User from '@/models/User';
import { sendOtpEmail } from '@/utils/email';

export async function POST(req) {
    const { email } = await req.json();
    await dbConnect();

    // Find user and verify OTP
    const user = await User.findOne({ email });
    if (!user) {
        return NextResponse.json({ error: 'User does not Exist' }, { status: 400 });
    }
    // Generate OTP and hash it
    const otp = generateOTP();
    const hashedOtp = hashOtp(otp);

    // Store hashed OTP and expiration time in the database
    await User.updateOne(
        { email },
        { otp: hashedOtp, otpExpires: Date.now() + 5 * 60 * 1000 }, // expires in 5 minute
        { upsert: true }
    );

    // Send OTP email
    await sendOtpEmail(email, otp);

    return NextResponse.json({ message: 'OTP sent to your email.' });
}
