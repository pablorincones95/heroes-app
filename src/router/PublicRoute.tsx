import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate } from "react-router";

export const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { state } = useContext(AuthContext)!;
  return !state.logged ? children : <Navigate to="/marvel" />;
};
