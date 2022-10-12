import { forwardRef, useCallback, useMemo, useRef, useState } from "react";
import Draggable, { DraggableProps } from "react-draggable";
import { mergeRefs } from "react-merge-refs";
import clsx from "clsx";

import { Window, WindowProps } from "../window";

import styles from "./index.module.scss";

export type DraggableWindowProps = WindowProps & {
  className?: string;
  centered?: boolean;
};

const DRAG_HANDLER_CLASSNAME = "header";

export const DraggableWindow = forwardRef<HTMLDivElement, DraggableWindowProps>(
  ({ title, children, className, centered = true, onClose }, forwardedRef) => {
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const ref = mergeRefs([nodeRef, forwardedRef]);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const positionOffset = useMemo(
      () => ({ x: centered ? "-50%" : 0, y: centered ? "-50%" : 0 }),
      [centered]
    );

    const handleDrag = useCallback<DraggableProps["onDrag"]>((_, { x, y }) => {
      setPosition({ x, y });
    }, []);

    return (
      <Draggable
        nodeRef={nodeRef}
        bounds="parent"
        handle={`.${DRAG_HANDLER_CLASSNAME}`}
        position={position}
        onDrag={handleDrag}
        onStop={handleDrag}
        positionOffset={positionOffset}
      >
        <Window
          ref={ref}
          title={title}
          headerClassName={DRAG_HANDLER_CLASSNAME}
          className={clsx(className, styles.window, {
            [styles.centered]: centered,
          })}
          onClose={onClose}
        >
          {children}
        </Window>
      </Draggable>
    );
  }
);
