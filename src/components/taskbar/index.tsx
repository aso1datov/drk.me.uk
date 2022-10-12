import { FC } from "react";
import clsx from "clsx";

import styles from "./index.module.scss";

type Props = {
  className?: string;
};

export const Taskbar: FC<Props> = ({ className }) => {
  return <aside className={clsx(className, styles.container)} />;
};
