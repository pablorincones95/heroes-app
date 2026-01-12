import { Routes, Route } from "react-router";
import { PrivateRoute } from "../router/PrivateRoute";
import { LoginPage } from "../auth/pages/LoginPage";
import { PublicRoute } from "../router/PublicRoute";
import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={<PrivateRoute children={<HeroesRoutes />} />}
        />
        <Route
          path="/login"
          element={<PublicRoute children={<LoginPage />} />}
        />
      </Routes>
    </>
  );
};
