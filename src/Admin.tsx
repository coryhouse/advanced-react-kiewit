import { useState } from "react";
import { useProducts } from "./hooks/useProducts";
import { Product } from "./types/product";

type FormStatus = "idle" | "loading" | "submitted" | "submitting" | "complete"

export function Admin() {
  const [product, setProduct] = useState<Product>({
    id: 0,
    category: "",
    image: "",
    name: "",
    price: 0,
    skus: [],
    description: "",
  });

  const { data: products, error, isLoading } = useProducts();

  if (error) throw error;
  if (isLoading) return <h1>Loading...</h1>;
  if (!products) return <h1>No products found.</h1>;

  function onChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) {
    // if the field is supposed to be a number, I need to parseInt here
    const value =
      e.target.type === "number" ? parseInt(e.target.value) : e.target.value;
    setProduct({ ...product, [e.target.id]: value });
  }

  return (
    <>
      <h1>Administer Products</h1>

      <h2>Add Product</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" value={product.name} onChange={onChange} />
      </div>

      <div>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          value={product.description}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="price">Price</label>
        <input
          id="price"
          type="number"
          value={product.price}
          onChange={onChange}
        />
      </div>

      <div>
        <label htmlFor="category">Category</label>
        <select value={product.category} onChange={onChange}>
          <option value="shoes">Shoes</option>
          <option value="accessories">Accessories</option>
        </select>
      </div>

      <div>
        {products.map((product) => (
          <h2 key={product.id}>{product.name}</h2>
        ))}
      </div>
    </>
  );
}
