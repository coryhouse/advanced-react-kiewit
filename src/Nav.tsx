import { Link } from "react-router-dom";
import { Product } from "./types/product";
import { useStore } from "./store/store";

type NavProps = {
  cart: Product[];
};

export function Nav({ cart }: NavProps) {
  const { user, logout } = useStore();

  return (
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

      {user && (
        <p>
          Hi {user.name}. <button onClick={logout}>Logout</button>
        </p>
      )}
    </nav>
  );
}
