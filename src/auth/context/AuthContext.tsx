import { createContext } from "react";
import type { State } from "./authTypes";

interface AuthContextProps extends State {
  dispatch: React.Dispatch<any>;
}

export const AuthContext = createContext<AuthContextProps | undefined>(
  undefined
);
