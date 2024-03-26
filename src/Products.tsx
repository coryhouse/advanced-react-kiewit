import { useProducts } from "./hooks/useProducts";

export default function Products() {
  const { data: products, error, isLoading } = useProducts();

  if (error) throw error;
  if (isLoading) return <h1>Loading...</h1>;
  if (!products) return <h1>No products found.</h1>;

  return (
    <>
      <h1>Products</h1>
      <div>
        {products.map((product) => (
          <h2 key={product.id}>{product.name}</h2>
        ))}
      </div>
    </>
  );
}
