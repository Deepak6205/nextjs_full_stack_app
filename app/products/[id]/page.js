export default function ProductDetailsPage({ params }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        maxWidth: "400px",
      }}
    >
      <h2>Product {params.id} details page</h2>
      <p>— content coming soon!</p>
    </div>
  );
}
