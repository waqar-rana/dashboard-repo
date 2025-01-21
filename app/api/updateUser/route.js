import dbConnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import User from "@/models/User";

export async function POST(request) {
  try {
    const { commission, username } = await request.json();
    await dbConnect();

    const user = await User.findOne({ username: username });
    user.commission = commission;
    await user.save();
    return NextResponse.json({ message: "User Updated Successfully"},{ status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: `Error Updating user: ${error.message}` },
      { status: 500 }
    );
  }
}
