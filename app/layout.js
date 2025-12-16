export const metadata = {
  title: "Products Store",
  description: "A simple Next.js products app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Header */}
        <header
          style={{
            padding: "15px",
            backgroundColor: "#f2f2f2",
            borderBottom: "1px solid #ccc",
          }}
        >
          <h1>Products Store</h1>
          <p>Navigation coming soon...</p>
        </header>

        <main style={{ padding: "20px" }}>
          {children}
        </main>

        <footer
          style={{
            padding: "15px",
            backgroundColor: "#f2f2f2",
            borderTop: "1px solid #ccc",
            marginTop: "20px",
          }}
        >
          <p>© 2025 Products Store. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
