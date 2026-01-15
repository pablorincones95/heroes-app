import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { setLastPathStorage } from "../auth/helpers/lastPath";

export const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  const { state } = useContext(AuthContext)!;
  const { pathname, search } = useLocation();
  if (!state.logged) {
    const lastPath = `${pathname}${search}`;
    setLastPathStorage(lastPath);
  }

  return state.logged ? children : <Navigate to="/login" />;
};
