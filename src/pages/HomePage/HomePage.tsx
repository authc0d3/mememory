import { FC } from "react";
import { useNavigate } from "react-router";
import { Button, Logo } from "@/components";
import { GAME_ROUTE } from "@/data";
import styles from "./styles.module.scss";
import { useTranslation } from "react-i18next";

const HomePage: FC = () => {
	const { t } = useTranslation();
	const navigate = useNavigate();

	function handleOnStart(): void {
		navigate(GAME_ROUTE);
	}

	return (
		<>
			<Logo />
			<h1 className={styles.title}>MeMemory</h1>
			<Button onClick={handleOnStart}>{t("Play")}</Button>
		</>
	);
};

export default HomePage;
