"use client";

import { signIn } from "next-auth/react";

export default function NextAuthLoginPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="bg-white p-8 rounded-2xl shadow max-w-md w-full text-center">
        <h1 className="text-2xl font-bold mb-4">
          Login with NextAuth
        </h1>

        <button
          onClick={() => signIn("github")}
          className="w-full bg-gray-900 text-white py-3 rounded-lg hover:bg-black transition"
        >
          Continue with GitHub
        </button>
      </div>
    </div>
  );
}
