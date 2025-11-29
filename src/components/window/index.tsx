import {
  type DetailedHTMLProps,
  forwardRef,
  type HTMLAttributes,
  type ReactNode,
} from "react";
import cc from "classcat";

import styles from "./index.module.scss";

type ContainerHTMLAttibutes = Pick<
  DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>,
  "onMouseDown" | "onMouseUp" | "onTouchEnd" | "onTouchStart" | "style"
>;

export type WindowProps = ContainerHTMLAttibutes & {
  title: ReactNode;
  className?: string;
  headerClassName?: string;
  children?: ReactNode;
  onClose: () => void;
};

export const Window = forwardRef<HTMLElement, WindowProps>(
  (
    {
      title,
      children,
      style,
      className,
      headerClassName,
      onClose,
      onMouseUp,
      onMouseDown,
      onTouchStart,
      onTouchEnd,
    },
    forwardedRef
  ) => (
    <section
      ref={forwardedRef}
      className={cc([className, styles.container])}
      style={style}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
      role="dialog"
      aria-modal="true"
    >
      <header className={cc([headerClassName, styles.header])}>
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.controls}>
          <button
            type="button"
            className={cc([styles.button, styles.close])}
            onClick={onClose}
            title="Close"
          />
        </div>
      </header>

      <div className={styles.content}>
        <div className={styles.body}>{children}</div>
      </div>
    </section>
  )
);
