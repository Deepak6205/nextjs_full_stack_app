import Link from "next/link";

export const metadata = {
  title: "Products Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            padding: "15px",
            backgroundColor: "#f2f2f2",
            borderBottom: "1px solid #ccc",
          }}
        >
          <h1>Products Store</h1>

          <nav style={{ display: "flex", gap: "15px" }}>
            <Link href="/">Home</Link>
            <Link href="/products">Products</Link>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>{children}</main>

        <footer
          style={{
            padding: "15px",
            backgroundColor: "#f2f2f2",
            borderTop: "1px solid #ccc",
            marginTop: "20px",
          }}
        >
          <p>© 2025 Products Store</p>
        </footer>
      </body>
    </html>
  );
}
