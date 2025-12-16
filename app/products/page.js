import Link from "next/link";

export default function ProductsPage() {
  return (
    <main>
      <h2>Products Page</h2>
      <p>Select a product:</p>

      <ul>
        {Array.from({ length: 10 }, (_, index) => {
          const productId = index + 1;

          return (
            <li key={productId}>
              <Link href={`/products/${productId}`}>
                Product {productId}
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
