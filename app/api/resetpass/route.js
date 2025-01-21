import dbConnect from '@/lib/mongodb';
import Admin from '@/models/Admin';
import { NextResponse } from 'next/server';
import bcrypt from "bcrypt"

export async function POST(request) {
    try {

        const { oldUsername, oldPassword, newUsername, newPassword } = await request.json();
        await dbConnect();

        const admin = await Admin.findOne({ username: oldUsername });
        if (!admin) {
            return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
        }
        const isMatch = await bcrypt.compare(oldPassword, admin.password);
        if (!isMatch) {
            return NextResponse.json({ message: 'Invalid username or password' }, { status: 401 });
        }
        if (admin && isMatch) {
            await admin.updateOne({ username: newUsername, password: bcrypt.hashSync(newPassword, 10) })
        }
        return NextResponse.json({ message: "Credentials Reset Successfully" })
    } catch (error) {
        return NextResponse.json({ message: `Something Went Wrong! ${error}` }, { status: 500 })
    }
}