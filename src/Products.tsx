import { useProducts } from "./hooks/useProducts";
import { useSearchParams } from "react-router-dom";
import { Product } from "./types/product";
import { useRef } from "react";

// Issues:
// 1. Only searches name
// 2. Had too many useEffects. Unified to resolve.
// 3. Needless state. Can derive state on render instead.
// 4. Didn't display a message if no products found.
// 5. Can't share the URL.

type ProductsProps = {
  cart: Product[];
  setCart: (cart: Product[]) => void;
};

export default function Products(props: ProductsProps) {
  const { data: products = [], isLoading } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const inputRef = useRef<HTMLInputElement>(null);
  const searchHistoryRef = useRef<string[]>([]);

  const search = searchParams.get("search") ?? "";

  if (isLoading) return <h1>Loading...</h1>;

  const matchingProducts = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase())
      )
    : products;

  return (
    <>
      <h1>Products</h1>
      <button onClick={() => inputRef.current?.focus()}>Focus search</button>
      <br />
      <input
        ref={inputRef}
        type="search"
        placeholder="Search..."
        onChange={(e) => {
          searchHistoryRef.current.push(e.target.value);
          setSearchParams({ search: e.target.value });
        }}
        value={search} // React controls the input. It's a controlled component.
      />
      <button
        onClick={() => {
          const previousSearch = searchHistoryRef.current.pop()!;
          setSearchParams({ search: previousSearch });
        }}
      >
        Apply Previous Search
      </button>
      {matchingProducts.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Name</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {matchingProducts.map((product) => (
              <tr key={product.id}>
                <td>{product.category}</td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <button
                    aria-label={`Add ${product.name} to cart`}
                    onClick={() => {
                      props.setCart([...props.cart, product]);
                    }}
                  >
                    Add to cart
                  </button>
                </td>
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
