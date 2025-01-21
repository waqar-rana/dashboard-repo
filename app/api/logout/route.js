import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";

export async function GET() {
  try {
    revalidateTag("logout");
    const response = NextResponse.json({ message: "Logout successful" });

    // Clear the token cookie by setting it with an expired date
    response.cookies.set("token", "", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production", // Ensure secure flag is true in production
      sameSite: "strict",
      path: "/", // Ensure the cookie is removed from the entire application
      expires: new Date(0), // Set the cookie to expire immediately
    });

    return response;
  } catch (error) {
    console.error("Error in logout API:", error);
    return NextResponse.error(); // Return a 500 error response
  }
}
