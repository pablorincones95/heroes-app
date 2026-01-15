import { useNavigate } from "react-router";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { getLastPathStorage } from "../helpers/lastPath";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext)!;

  const handleLogin = () => {
    const lastPath = getLastPathStorage();
    login("Pablo");
    setTimeout(() => {
      navigate(lastPath, { replace: true });
    }, 0);
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
