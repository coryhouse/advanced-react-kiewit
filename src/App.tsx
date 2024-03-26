import "./App.css";
import { Product } from "./types/product";
import { useFetch } from "./hooks/useFetch";

function App() {
  const {
    data: products,
    error,
    loading,
  } = useFetch<Product[]>({
    url: "http://localhost:3001/products",
  });

  if (error) throw error;
  if (loading) return <h1>Loading...</h1>;
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

export default App;
