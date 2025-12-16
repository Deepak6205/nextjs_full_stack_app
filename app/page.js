import Link from "next/link";

export default function HomePage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center text-center">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to Products Store 🛒
        </h1>

        <p className="text-gray-600 text-lg mb-8">
          Discover high-quality products with prices, ratings, and
          detailed information powered by a real API.
        </p>

        <Link
          href="/products"
          className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg text-lg hover:bg-blue-700 transition"
        >
          Explore Products →
        </Link>
      </div>
    </div>
  );
}
