import Link from "next/link";
import ProductImage from "../components/ProductImage";

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <div className="w-full">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-300 mb-2">Our Products</h2>
        <p className="text-gray-400">High-quality products at best prices</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {data.products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl border border-gray-200 hover:border-blue-500 shadow-sm hover:shadow-md transition flex flex-col"
          >
            <div className="relative">
              <ProductImage
                src={product.thumbnail || "/product-placeholder.jpg"}
                alt={product.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />

              <span className="absolute top-2 left-2 bg-green-400 text-white text-[11px] font-semibold px-2 py-0.5 rounded">
                {product.discountPercentage}% OFF
              </span>
            </div>

            <div className="p-4 flex flex-col flex-grow">
              <h3 className="text-base font-semibold text-gray-900 leading-snug line-clamp-2">
                {product.title}
              </h3>

              <p className="text-xs text-gray-500 mb-2">{product.brand}</p>

              <p className="text-sm text-gray-600 line-clamp-2 mb-3">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-3">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price}
                </span>
                <span className="text-sm text-yellow-500 font-medium">
                  ⭐ {product.rating}
                </span>
              </div>

              <Link
                href={`/products/${product.id}`}
                className="mt-auto text-center bg-blue-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
