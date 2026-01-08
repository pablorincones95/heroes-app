import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { initialState } from "./authTypes";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);
  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};
