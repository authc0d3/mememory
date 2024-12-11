import { FC } from "react";
import { Button, Logo } from "@/components";
import styles from "./styles.module.css";

const HomePage: FC = () => (
	<>
		<Logo />
		<h1 className={styles.title}>MeMemory</h1>
		<Button>Comenzar</Button>
	</>
);

export default HomePage;
