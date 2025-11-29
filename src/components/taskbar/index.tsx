import type { FC } from "react";
import cc from "classcat";

import styles from "./index.module.scss";

type Props = {
  className?: string;
};

export const Taskbar: FC<Props> = ({ className }) => (
  <aside className={cc([className, styles.container])} />
);
