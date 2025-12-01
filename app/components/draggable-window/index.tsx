"use client";

import cc from "classcat";
import {
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import Draggable, { type DraggableProps } from "react-draggable";
import { mergeRefs } from "react-merge-refs";
import { isMobile } from "@/app/utils/is-mobile";
import Window, { type WindowProps } from "../window";
import { getInitialWindowPosition } from "./helpers";
import styles from "./index.module.scss";

export type DraggableWindowProps = WindowProps & {
  className?: string;
};

const DRAG_HANDLER_CLASSNAME = "header";

const DraggableWindow = forwardRef<HTMLDivElement, DraggableWindowProps>(
  ({ title, children, className, onClose }, forwardedRef) => {
    const nodeRef = useRef<HTMLDivElement>(null);
    const ref = mergeRefs([nodeRef, forwardedRef]);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const mobile = isMobile();

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
        disabled={mobile}
      >
        <Window
          ref={ref}
          title={title}
          headerClassName={DRAG_HANDLER_CLASSNAME}
          className={cc([className, styles.window])}
          onClose={onClose}
        >
          {children}
        </Window>
      </Draggable>
    );
  },
);

export default DraggableWindow;
