import Link from "next/link";

export default function HomePage() {
  return (
    <div
      style={{
        minHeight: "70vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          textAlign: "center",
          maxWidth: "600px",
        }}
      >
        <h1 style={{ fontSize: "42px", marginBottom: "15px" }}>
          Welcome to Products Store 🛒
        </h1>

        <p
          style={{
            fontSize: "18px",
            color: "#555",
            marginBottom: "30px",
          }}
        >
          Discover high-quality products with best prices, ratings,
          and detailed descriptions — all in one place.
        </p>

        <Link
          href="/products"
          style={{
            backgroundColor: "#0070f3",
            color: "white",
            padding: "12px 24px",
            borderRadius: "8px",
            textDecoration: "none",
            fontSize: "16px",
          }}
        >
          Explore Products →
        </Link>
      </div>
    </div>
  );
}
