import { Link } from "react-router-dom";
import { Product } from "./types/product";
import { useUserContext } from "./context/UserContext";

type NavProps = {
  cart: Product[];
};

export function Nav({ cart }: NavProps) {
  const user = useUserContext();

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

      <p>
        Hi {user.name}. <button>Logout</button>
      </p>
    </nav>
  );
}
