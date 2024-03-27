import { createContext, useContext } from "react";
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

export function useUserContext() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUserContext must be used within a UserContextProvider");
  }
  return context;
}
