import { cookies } from "next/headers";
import { verifyToken } from "@/lib/auth";

export default async function ProtectedPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("token")?.value;
  const user = token ? await verifyToken(token) : null;

  if (!user) {
    return (
      <div className="text-center text-red-600 text-xl">
        Unauthorized
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow border">
      
      <h1 className="text-3xl text-gray-900 font-bold mb-2">
        Dashboard
      </h1>

      <p className="text-gray-800 mb-6">
        Welcome back, <span className="font-semibold">{user.email}</span>
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div className="border rounded-xl p-5">
          <h3 className="font-semibold text-gray-800 text-lg mb-1">Account</h3>
          <p className="text-gray-500 text-sm">
            Logged in via JWT authentication
          </p>
        </div>

        <div className="border rounded-xl p-5">
          <h3 className="font-semibold text-gray-800 text-lg mb-1">Security</h3>
          <p className="text-gray-500 text-sm">
            Token stored in HTTP-only cookies
          </p>
        </div>
      </div>

      <form action="/api/logout" method="POST">
        <button
          type="submit"
          className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Logout
        </button>
      </form>
    </div>
  );
}
