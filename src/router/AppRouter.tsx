import { Routes, Route } from "react-router";

import { LoginPage } from "../auth/pages/LoginPage";

import { HeroesRoutes } from "../heroes/routes/HeroesRoutes";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />

        <Route path="/heroes/*" element={<HeroesRoutes />} />
        <Route path="/*" element={<HeroesRoutes />} />
      </Routes>
    </>
  );
};
