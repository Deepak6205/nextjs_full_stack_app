export async function generateMetadata({ params }) {
  const { id } = await params; // ✅ FIX

  return {
    title: `Post ${id} - My Blog`,
    description: `Details of post ${id}`,
  };
}

export default async function PostPage({ params }) {
  const { id } = await params; 

  return (
    <div>
      <h1>Post {id}</h1>
      <p>This page has dynamic metadata.</p>
    </div>
  );
}
