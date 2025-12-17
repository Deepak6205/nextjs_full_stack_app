"use client";

import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";

export default function AuthButtons() {
  const { data: session, status } = useSession();

  // Loading state
  if (status === "loading") {
    return null;
  }

  // NOT logged in with NextAuth
  if (!session) {
    return (
      <Link
        href="/auth/login"
        className="text-gray-700 hover:text-blue-700 transition"
      >
        OAuth Login
      </Link>
    );
  }

  // Logged in with NextAuth
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-700">
        Hi, {session.user.name}
      </span>

      <button
        onClick={() => signOut({ callbackUrl: "/auth/login" })}
        className="text-red-600 hover:underline text-sm"
      >
        OAuth Logout
      </button>
    </div>
  );
}
