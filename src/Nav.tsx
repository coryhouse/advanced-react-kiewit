import { Link } from "react-router-dom";
import { Product } from "./types/product";
import { useSnapshot } from "valtio";
import { userState } from "./state/userState";

type NavProps = {
  cart: Product[];
};

export function Nav({ cart }: NavProps) {
  const snap = useSnapshot(userState);

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

      {snap.user && (
        <p>
          Hi {snap.user.name}.{" "}
          <button
            onClick={() => {
              userState.user = null;
            }}
          >
            Logout
          </button>
        </p>
      )}
    </nav>
  );
}
