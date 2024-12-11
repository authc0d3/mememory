import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { HomePage } from "../pages";
import { GAME_ROUTE, MAIN_ROUTE } from "../data";

const App: FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={MAIN_ROUTE} element={<HomePage />} />
      <Route path={GAME_ROUTE} element={<>test</>} />
      <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
    </Routes>
  </BrowserRouter>
);

export default App;
