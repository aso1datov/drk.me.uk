import { FC, ReactNode } from "react";
import clsx from "clsx";

import { Background } from "../background";

import styles from "./index.module.scss";

type Props = {
  className?: string;
  children?: ReactNode;
};

export const Desktop: FC<Props> = ({ className, children }) => (
  <section className={clsx(className, styles.container)}>
    <div className={styles.content}>{children}</div>

    <Background className={styles.background} />
  </section>
);
