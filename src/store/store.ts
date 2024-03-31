import { create } from "zustand";
import { User } from "../types/user";

type Store = {
  user: User | null;
  logout: () => void;
};

export const useStore = create<Store>((set) => ({
  user: {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
    password: "password",
  },
  logout: () => set({ user: null }),
}));
