import ky from "ky";
import { Product } from "./types/product";
import { useQuery } from "@tanstack/react-query";

export default function Products() {
  const {
    data: products,
    error,
    isLoading,
  } = useQuery<Product[]>({
    queryFn: async () => {
      return ky("http://localhost:3001/products").json();
    },
    queryKey: ["products"],
    staleTime: Infinity,
  });

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
