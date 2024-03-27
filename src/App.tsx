import { Route, Routes } from "react-router-dom";
import Products from "./Products";
import { About } from "./About";
import { Admin } from "./Admin";
import { Product, productSchema } from "./types/product";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { z } from "zod";
import { Nav } from "./Nav";

export function App() {
  const [cart, setCart] = useLocalStorage<Product[]>(
    "cart",
    [],
    z.array(productSchema)
  );

  return (
    <>
      <Nav cart={cart} />
      <Routes>
        <Route path="/" element={<Products setCart={setCart} cart={cart} />} />
        <Route path="/about" Component={About} />
        <Route path="/admin" Component={Admin} />
      </Routes>
    </>
  );
}
