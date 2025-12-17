export async function generateMetadata({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return {
    title: `${product.title} - Products Store`,
  };
}

export default async function ProductDetailPage({ params }) {
  const { id } = await params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
      <p>{product.description}</p>
    </div>
  );
}
