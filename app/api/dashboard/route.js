import dbConnect from "@/lib/mongodb";
import Admin from "@/models/Admin";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();
    const admin = await Admin.findOne();
    const { password, ...adminData } = admin.toObject();
    return NextResponse.json(adminData);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const { username, enableDashboard, enableStatistics, enableEarnings } = await request.json();
    await dbConnect();
    const admin = await Admin.findOne({ username });
    if (enableDashboard != undefined) admin.enableDashboard = enableDashboard;
    if (enableStatistics != undefined) admin.enableStatistics = enableStatistics;
    if (enableEarnings != undefined) admin.enableEarnings = enableEarnings;
    await admin.save();
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
}
