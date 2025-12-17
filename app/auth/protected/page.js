"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

export default function NextAuthProtectedPage() {
  const { data: session, status } = useSession();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow">
      <h1 className="text-2xl font-bold mb-2">
        NextAuth Protected Page
      </h1>
      <p className="mb-4">
        Logged in as <strong>{session.user.email}</strong>
      </p>
    </div>
  );
}
