import { atom } from "jotai";
import { User } from "../types/user";

export const userAtom = atom<User | null>({
  id: 1,
  name: "John Doe",
  email: "john@doe.com",
  password: "password",
});
