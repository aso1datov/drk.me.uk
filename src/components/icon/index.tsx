import type { FC, ReactNode } from "react";
import { isMobile } from "react-device-detect";
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

  const goToPage = () => {
    navigate(to);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      goToPage();
    }
  };

  const handlers = isMobile
    ? { onClick: goToPage }
    : { onDoubleClick: goToPage, onKeyDown: handleKeyDown };

  return (
    <div
      role="button"
      className={clsx(className, styles.container, styles[size])}
      tabIndex={0}
      {...handlers}
    >
      <span className={styles.image} aria-hidden="true">
        {image}
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
};
