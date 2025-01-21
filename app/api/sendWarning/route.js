import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { username, enableWarning, warningMessage } = await request.json();
    try {
        await dbConnect();
        const user = await User.findOne({ username: username });
        user.enableWarning = enableWarning;
        user.warningMessage = warningMessage;
        await user.save();
        return NextResponse.json({ message: "Warning Sent Successfully" }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: `Error Sending Warning: ${error.message}` }, { status: 500 });
    }
}