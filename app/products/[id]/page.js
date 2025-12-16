export const dynamic = "force-dynamic";

export default async function ProductDetailsPage({ params }) {
  const { id } = await params;

  const res = await fetch(
    `https://dummyjson.com/products/${id}`,
    { cache: "no-store" }
  );

  const product = await res.json();

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "24px",
        border: "1px solid #e5e5e5",
        borderRadius: "14px",
        display: "flex",
        gap: "40px",
        backgroundColor: "#fff",
      }}
    >
      {/* Image Section */}
      <div>
        <img
          src={product.thumbnail}
          alt={product.title}
          style={{
            width: "380px",
            height: "380px",
            objectFit: "cover",
            borderRadius: "12px",
            border: "1px solid #ddd",
          }}
        />
      </div>

      {/* Details Section */}
      <div style={{ flex: 1 }}>
        <h1 style={{ marginBottom: "10px" }}>
          {product.title}
        </h1>

        <p style={{ color: "#777", marginBottom: "8px" }}>
          Brand: <strong>{product.brand}</strong> • Category:{" "}
          <strong>{product.category}</strong>
        </p>

        <p
          style={{
            color: "#555",
            lineHeight: "1.7",
            marginBottom: "20px",
          }}
        >
          {product.description}
        </p>

        {/* Price Section */}
        <div
          style={{
            marginBottom: "15px",
            fontSize: "20px",
          }}
        >
          💰 <strong>${product.price}</strong>{" "}
          <span
            style={{
              fontSize: "14px",
              color: "green",
              marginLeft: "10px",
            }}
          >
            ({product.discountPercentage}% OFF)
          </span>
        </div>

        {/* Rating & Stock */}
        <p style={{ marginBottom: "10px" }}>
          ⭐ <strong>{product.rating}</strong> rating
        </p>

        <p>
          📦{" "}
          <strong>
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </strong>
          {product.stock > 0 && ` (${product.stock} items available)`}
        </p>
      </div>
    </div>
  );
}
