import ProductImage from "@/app/components/ProductImage";

export const dynamic = "force-dynamic";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`, {
    cache: "no-store",
  });

  const product = await res.json();

  return (
    <div className="max-w-5xl mx-auto bg-white border rounded-2xl p-6 flex gap-10">
      <ProductImage
        src={product.thumbnail || "/product-placeholder.jpg"}
        alt={product.title}
        className="w-[380px] h-[380px] object-cover rounded-xl border"
      />

      <div className="flex-1">
        <h1 className="text-3xl text-gray-800 font-bold mb-2">
          {product.title}
        </h1>

        <p className="text-gray-700 mb-4">
          Brand: <strong>{product.brand}</strong> • Category:{" "}
          <strong>{product.category}</strong>
        </p>

        <p className="text-gray-600 leading-relaxed mb-6">
          {product.description}
        </p>

        <p className="text-xl text-gray-950 font-semibold mb-2">
          💰 ${product.price}{" "}
          <span className="text-green-600 text-sm">
            ({product.discountPercentage}% OFF)
          </span>
        </p>

        <p className="mb-2 text-gray-950">
          ⭐ <strong>{product.rating}</strong>
        </p>

        <p className="text-gray-950">
          📦 <strong>{product.stock > 0 ? "In Stock" : "Out of Stock"}</strong>
          {product.stock > 0 && ` (${product.stock} items available)`}
        </p>
      </div>
    </div>
  );
}
