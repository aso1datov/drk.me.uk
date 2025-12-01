import cc from "classcat";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

import styles from "./index.module.scss";

type Props = {
  className?: string;
  children?: ReactNode;
};

const BackgroundLazy = dynamic(() => import("../background/index"));

function Desktop({ className, children }: Props) {
  return (
    <section className={cc([className, styles.container])}>
      <div className={styles.content}>{children}</div>

      <BackgroundLazy className={styles.background} />
    </section>
  );
}

export default Desktop;
