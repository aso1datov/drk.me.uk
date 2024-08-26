import {
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import { isMobile } from "react-device-detect";
import Draggable, { type DraggableProps } from "react-draggable";
import { mergeRefs } from "react-merge-refs";
import clsx from "clsx";

import { Window, WindowProps } from "../window";

import { getInitialWindowPosition } from "./helpers";

import styles from "./index.module.scss";

export type DraggableWindowProps = WindowProps & {
  className?: string;
};

const DRAG_HANDLER_CLASSNAME = "header";

export const DraggableWindow = forwardRef<HTMLDivElement, DraggableWindowProps>(
  ({ title, children, className, onClose }, forwardedRef) => {
    const nodeRef = useRef<HTMLDivElement | null>(null);
    const ref = mergeRefs([nodeRef, forwardedRef]);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleDrag = useCallback<DraggableProps["onDrag"]>((_, { x, y }) => {
      setPosition({ x, y });
    }, []);

    useLayoutEffect(() => {
      if (nodeRef.current !== null) {
        const initialPosition = getInitialWindowPosition(nodeRef.current);

        setPosition(initialPosition);
      }
    }, []);

    return (
      <Draggable
        nodeRef={nodeRef}
        bounds="parent"
        handle={`.${DRAG_HANDLER_CLASSNAME}`}
        position={position}
        onDrag={handleDrag}
        onStop={handleDrag}
        disabled={isMobile}
      >
        <Window
          ref={ref}
          title={title}
          headerClassName={DRAG_HANDLER_CLASSNAME}
          className={clsx(className, styles.window)}
          onClose={onClose}
        >
          {children}
        </Window>
      </Draggable>
    );
  }
);
