import dbConnect from "@/lib/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import jwt from "jsonwebtoken";

export async function GET(request) {
  try {
    revalidateTag("users");
    // Get the JWT token from cookies
    const token = request.cookies.get("admintoken")?.value;

    if (!token) {
      return NextResponse.json(
        { message: "Unauthorized access" },
        { status: 401 }
      );
    }

    // Verify the JWT token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    await dbConnect();
    const users = await User.find({}).lean();

    if (!users || users.length === 0) {
      return NextResponse.json({ message: "No Users Found" }, { status: 401 });
    }

    return NextResponse.json(users);
  } catch (error) {
    if (error.name === "JsonWebTokenError") {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    } else if (error.name === "TokenExpiredError") {
      return NextResponse.json({ message: "Token expired" }, { status: 401 });
    } else {
      return NextResponse.json(
        { message: `Error fetching users: ${error.message}` },
        { status: 500 }
      );
    }
  }
}
