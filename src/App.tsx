import { useEffect, useState } from "react";
import "./App.css";
import { Product } from "./types/product";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const resp = await fetch("http://localhost:3001/products");
      // Hey TypeScript, this is an array of Product objects. Trust me!
      const data = (await resp.json()) as Product[];
      setProducts(data);
    }
    getProducts();
  }, []);

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
