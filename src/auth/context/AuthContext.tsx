import { createContext } from "react";
import type { State } from "./authTypes";

interface AuthContextProps {
  state: State;
  login: (name: string) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
