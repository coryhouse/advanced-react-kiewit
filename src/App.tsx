import { useEffect, useState } from "react";
import "./App.css";
import { Product, productSchema } from "./types/product";
import { z } from "zod";
import ky from "ky";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function getProducts() {
      try {
        const resp = await ky("http://localhost:3001/products").json();
        const data = z.array(productSchema).parse(resp);
        setProducts(data);
      } catch (err) {
        // TODO: Handle error in a type safe manner
        setError(err as Error);
      }
    }
    getProducts();
  }, []);

  if (error) throw error;

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
