import type { FC, ReactNode } from "react";
import cc from "classcat";

import { Background } from "../background";

import styles from "./index.module.scss";

type Props = {
  className?: string;
  children?: ReactNode;
};

export const Desktop: FC<Props> = ({ className, children }) => (
  <section className={cc([className, styles.container])}>
    <div className={styles.content}>{children}</div>

    <Background className={styles.background} />
  </section>
);
