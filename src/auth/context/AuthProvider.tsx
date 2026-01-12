import { AuthContext } from "./AuthContext";
import { useReducer } from "react";
import { authReducer } from "./authReducer";
import { initialState, types } from "./authTypes";
import {
  getUserStorage,
  removeUserStorage,
  setUserStorage,
} from "../helpers/userStorage";

const init = () => {
  const user = getUserStorage();
  return user ? { logged: true, user } : initialState;
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, initialState, init);

  const login = (name: string = "") => {
    const action = {
      type: types.login,
      payload: {
        id: 1,
        name,
      },
    };
    dispatch(action);
    setUserStorage({ id: 1, name });
  };

  const logout = () => {
    const action = {
      type: types.logout,
    };
    dispatch(action);
    removeUserStorage();
  };

  return (
    <AuthContext.Provider value={{ state, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
