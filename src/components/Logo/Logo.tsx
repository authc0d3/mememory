import { FC } from "react";
import styles from "./styles.module.css";

const Logo: FC = () => (
  <div className={styles.logo}>
    <img src="/logo.svg" alt="MeMemory" />
  </div>
);

export default Logo;
