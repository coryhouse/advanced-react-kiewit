import { proxy } from "valtio";
import { User } from "../types/user";

type UserState = {
  user: User | null;
};

export const userState = proxy<UserState>({
  user: {
    id: 1,
    name: "John Doe",
    email: "john@doe.com",
    password: "password",
  },
});
