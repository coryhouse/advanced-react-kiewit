import { Link, Route, Routes } from "react-router-dom";
import Products from "./Products";
import { About } from "./About";
import { Admin } from "./Admin";
import { useState } from "react";
import { Product } from "./types/product";

export function App() {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Products</Link>
          </li>
          <li>
            <Link to="/cart">Cart ({cart.length})</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/admin">Admin</Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Products setCart={setCart} />} />
        <Route path="/about" Component={About} />
        <Route path="/admin" Component={Admin} />
      </Routes>
    </>
  );
}
