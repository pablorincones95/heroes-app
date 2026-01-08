import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext)!;

  const handleLogin = () => {
    dispatch({ type: "[Auth] Login", payload: "Pablo" });
    navigate("/heroes", {
      replace: true,
    });
  };

  return (
    <div className="container mt-5">
      <h1>Login</h1>
      <hr />
      <button className="btn btn-primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};
