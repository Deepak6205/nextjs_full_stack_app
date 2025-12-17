import { NextResponse } from "next/server";
import { createToken } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();

  
  if (email !== "admin@test.com" || password !== "1234") {
    return NextResponse.json(
      { error: "Invalid credentials" },
      { status: 401 }
    );
  }

  const token = await createToken({ email });

  const response = NextResponse.json({ success: true });

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    path: "/",
  });

  return response;
}
