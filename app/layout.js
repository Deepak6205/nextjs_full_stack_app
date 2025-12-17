import Link from "next/link";
import "./globals.css";
import Providers from "./providers";
import AuthButtons from "./components/AuthButtons";

export const metadata = {
  title: "Products Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-900 antialiased">
        <Providers>

          {/* Header */}
          <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-300 to-blue-200 border-b">
            <div className="w-full px-6 py-4 flex items-center justify-between">
              
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Products Store Logo"
                  className="h-10 w-10 object-contain"
                />
                <span className="text-2xl font-extrabold tracking-tight">
                  Products<span className="text-blue-600">Store</span>
                </span>
              </Link>

              {/* Navigation */}
              <nav className="flex items-center gap-6 text-sm font-semibold">
                <Link href="/" className="text-gray-700 hover:text-blue-700">
                  Home
                </Link>

                <Link href="/products" className="text-gray-700 hover:text-blue-700">
                  Products
                </Link>

                {/* Custom auth */}
                <Link href="/protected" className="text-gray-700 hover:text-blue-700">
                  Protected
                </Link>

                <Link href="/login" className="text-blue-700 hover:underline">
                  Login
                </Link>

                <form action="/api/logout" method="POST">
                  <button className="text-red-600 hover:underline">
                    Logout
                  </button>
                </form>

                {/* NextAuth (dynamic) */}
                <AuthButtons />
              </nav>
            </div>
          </header>

          {/* Main */}
          <main className="flex-1 w-full px-6 py-12">
            {children}
          </main>

          {/* Footer */}
          <footer className="bg-white border-t">
            <div className="w-full px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500">
                © 2025 Products Store. All rights reserved.
              </p>

              <div className="flex gap-6 text-sm text-gray-500">
                <span className="hover:text-blue-600 cursor-pointer">Privacy</span>
                <span className="hover:text-blue-600 cursor-pointer">Terms</span>
                <span className="hover:text-blue-600 cursor-pointer">Contact</span>
              </div>
            </div>
          </footer>

        </Providers>
      </body>
    </html>
  );
}
