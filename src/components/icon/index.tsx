import { FC, KeyboardEventHandler, ReactNode, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

import styles from "./index.module.scss";

type Props = {
  label: ReactNode;
  image: ReactNode;
  to: string;
  size?: "small" | "medium" | "large";
  className?: string;
};

export const Icon: FC<Props> = ({
  className,
  to,
  label,
  image,
  size = "medium",
}) => {
  const navigate = useNavigate();

  const handleDoubleClick = useCallback(() => {
    navigate(to);
  }, [to, navigate]);

  const handleKeyDown = useCallback<KeyboardEventHandler<HTMLDivElement>>(
    (event) => {
      if (event.key === "Enter") {
        handleDoubleClick();
      }
    },
    [handleDoubleClick]
  );

  return (
    <div
      role="button"
      className={clsx(className, styles.container, styles[size])}
      onDoubleClick={handleDoubleClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <span className={styles.image} aria-hidden="true">
        {image}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};
