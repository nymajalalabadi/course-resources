export default async function NewsDetailPage( { params } ) {
    const { id } = await params;

  return (
    <>
      <h1>News Detail</h1>
      <p>News ID: {id}</p>
    </>
  );
}