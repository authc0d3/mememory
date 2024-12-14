import { FC } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { GamePage, HomePage } from "../pages";
import { GAME_ROUTE, MAIN_ROUTE } from "../data";
import { IconoirProvider } from "iconoir-react";

const App: FC = () => (
	<IconoirProvider>
		<BrowserRouter>
			<Routes>
				<Route path={MAIN_ROUTE} element={<HomePage />} />
				<Route path={GAME_ROUTE} element={<GamePage />} />
				<Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
			</Routes>
		</BrowserRouter>
	</IconoirProvider>
);

export default App;
