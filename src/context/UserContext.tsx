import { createContext } from "react";
import { User } from "../types/user";

const UserContext = createContext<User | undefined>(undefined);

type UserContextProviderProps = {
  children: React.ReactNode;
  user: User;
};

export function UserContextProvider(props: UserContextProviderProps) {
  return (
    <UserContext.Provider value={props.user}>
      {props.children}
    </UserContext.Provider>
  );
}
