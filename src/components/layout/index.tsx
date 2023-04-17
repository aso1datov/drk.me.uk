import { FC, ReactNode } from "react";

import styles from "./index.module.scss";

type Props = {
  children?: ReactNode;
};

export const Layout: FC<Props> = ({ children }) => (
  <div className={styles.container}>{children}</div>
);
