import React from "react";
import { motion } from "framer-motion";
import { useOS } from "../../context/OSContext";
import type { WindowProps } from "./types";
import "./Window.css";

export const Window: React.FC<WindowProps> = ({ id, children }) => {
  const { windows, closeWindow, focusWindow, minimizeWindow } = useOS();

  const windowState = windows[id];
  if (!windowState || !windowState.isOpen || windowState.isMinimized)
    return null;

  const initialX = Math.max(0, (window.innerWidth - 420) / 2);
  const initialY = Math.max(28, (window.innerHeight - 300) / 2);

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{
        left: -initialX,
        top: 28 - initialY,
        right: window.innerWidth - 420 - initialX,
        bottom: window.innerHeight - 300 - initialY,
      }}
      onMouseDown={() => focusWindow(id)}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        zIndex: windowState.zIndex,
        position: "absolute",
        left: initialX,
        top: initialY,
        width: "auto",
        height: "auto",
        maxWidth: "100vw",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
      className="liquid-glass rounded-lg overflow-hidden"
    >
      {/* Window Header */}
      <div className="window-header">
        <div className="window-controls">
          <button
            className="window-control window-control--maximize"
            title="Maximize"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            className="window-control window-control--minimize"
            title="Minimize"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            className="window-control window-control--close"
            title="Close"
          />
        </div>
      </div>

      {/* Window Content */}
      <div className="window-content custom-scrollbar">{children}</div>
    </motion.div>
  );
};
