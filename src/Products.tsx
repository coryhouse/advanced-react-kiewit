import { useState } from "react";
import { useProducts } from "./hooks/useProducts";

// Issues:
// 1. Only searches name
// 2. Had too many useEffects. Unified to resolve.
// 3. Needless state. Can derive state on render instead.
// 4. Didn't display a message if no products found.
// 5. Can't share the URL.

export default function Products() {
  const { data: products = [], isLoading } = useProducts();
  const [search, setSearch] = useState("");

  if (isLoading) return <h1>Loading...</h1>;

  const matchingProducts = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  return (
    <>
      <h1>Products</h1>
      <input
        type="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
      {matchingProducts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {matchingProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.category}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No products found.</p>
      )}
    </>
  );
}
