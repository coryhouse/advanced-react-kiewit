import { Dispatch, SetStateAction, createContext, useContext } from "react";
import { User } from "../types/user";

type UserContextType = {
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserContextProviderProps = {
  children: React.ReactNode;
  user: User | null;
  setUser: Dispatch<SetStateAction<User | null>>;
};

export function UserContextProvider({
  user,
  setUser,
  children,
}: UserContextProviderProps) {
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
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
