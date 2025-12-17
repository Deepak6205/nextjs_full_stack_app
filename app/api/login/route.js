import { NextResponse } from "next/server";
import { createToken } from "@/lib/auth";

export async function POST(req) {
  const { email, password } = await req.json();

  if (email !== "admin@test.com" || password !== "1234") {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }

  const token = await createToken({ email });

  const response = NextResponse.redirect(new URL("/products", req.url));

  response.cookies.set("token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 60 * 24,
  });

  return response;
}
