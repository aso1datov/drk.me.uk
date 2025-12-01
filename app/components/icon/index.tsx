"use client";

import cc from "classcat";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { ReactNode } from "react";
import { isMobile } from "@/app/utils/is-mobile";
import styles from "./index.module.scss";

type Props = {
  label: ReactNode;
  image: string;
  to: string;
  size?: "small" | "medium" | "large";
  className?: string;
};

function Icon({ className, to, label, image, size = "medium" }: Props) {
  const router = useRouter();
  const mobile = isMobile();

  const goToPage = () => {
    router.push(to);
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      goToPage();
    }
  };

  const handlers = mobile
    ? { onClick: goToPage }
    : { onDoubleClick: goToPage, onKeyDown: handleKeyDown };

  return (
    // biome-ignore lint/a11y/useSemanticElements: <>
    <div
      role="button"
      className={cc([className, styles.container, styles[size]])}
      tabIndex={0}
      {...handlers}
    >
      <span className={styles.image} aria-hidden="true">
        <Image src={image} width={25} height={34} alt="" unoptimized={true} />
      </span>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default Icon;
