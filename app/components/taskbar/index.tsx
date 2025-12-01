import cc from "classcat";

import styles from "./index.module.scss";

type Props = {
  className?: string;
};

function Taskbar({ className }: Readonly<Props>) {
  return <aside className={cc([className, styles.container])} />;
}

export default Taskbar;
