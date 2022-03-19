import { FC } from "react";

import styles from "./index.module.scss";

export const Layout: FC = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};
