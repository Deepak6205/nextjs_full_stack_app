import Link from "next/link";

export default async function ProductsPage() {
  const res = await fetch("https://dummyjson.com/products");
  const data = await res.json();

  return (
    <div>
      <h2 style={{ marginBottom: "25px" }}>Our Products</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "25px",
        }}
      >
        {data.products.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #e5e5e5",
              borderRadius: "14px",
              padding: "16px",
              backgroundColor: "#fff",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {/* Image */}
            <img
              src={product.thumbnail}
              alt={product.title}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                borderRadius: "10px",
                marginBottom: "12px",
              }}
            />

            {/* Title */}
            <h3 style={{ marginBottom: "6px" }}>
              {product.title}
            </h3>

            {/* Brand + Category */}
            <p style={{ fontSize: "13px", color: "#777" }}>
              {product.brand} • {product.category}
            </p>

            {/* Description */}
            <p
              style={{
                fontSize: "14px",
                color: "#555",
                margin: "10px 0",
                flexGrow: 1,
              }}
            >
              {product.description.slice(0, 70)}...
            </p>

            {/* Price & Discount */}
            <p style={{ marginBottom: "6px" }}>
              💰 <strong>${product.price}</strong>{" "}
              <span
                style={{
                  fontSize: "13px",
                  color: "green",
                }}
              >
                ({product.discountPercentage}% off)
              </span>
            </p>

            {/* Rating & Stock */}
            <p style={{ fontSize: "14px", marginBottom: "12px" }}>
              ⭐ {product.rating} • 📦{" "}
              {product.stock > 0 ? "In stock" : "Out of stock"}
            </p>

            {/* Button */}
            <Link
              href={`/products/${product.id}`}
              style={{
                textAlign: "center",
                padding: "10px",
                backgroundColor: "#0070f3",
                color: "white",
                borderRadius: "8px",
                textDecoration: "none",
              }}
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
