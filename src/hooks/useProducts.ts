import { useQuery } from "@tanstack/react-query";
import { Product } from "../types/product";
import ky from "ky";

export function useProducts() {
  return useQuery<Product[]>({
    queryFn: async () => {
      return ky("http://localhost:3001/products").json();
    },
    queryKey: ["products"],
  });
}
