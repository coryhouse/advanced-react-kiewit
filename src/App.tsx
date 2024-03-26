import { useEffect, useState } from "react";
import "./App.css";
import { Product, productSchema } from "./types/product";
import { z } from "zod";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function getProducts() {
      const resp = await fetch("http://localhost:3001/products");
      const data = z.array(productSchema).parse(await resp.json());
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
