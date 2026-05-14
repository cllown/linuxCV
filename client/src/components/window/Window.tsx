import React from "react";
import { motion } from "framer-motion";
import { useOS } from "../../context/OSContext";
import type { WindowProps } from "./types";
import "./Window.css";

export const Window: React.FC<WindowProps> = ({ id, children }) => {
  const { windows, closeWindow, focusWindow, minimizeWindow, isMobile } =
    useOS();

  const windowState = windows[id];
  if (!windowState || !windowState.isOpen || windowState.isMinimized)
    return null;

  const initialX = isMobile ? 0 : Math.max(0, (window.innerWidth - 420) / 2);
  const initialY = isMobile ? 0 : Math.max(60, (window.innerHeight - 400) / 4);

  return (
    <motion.div
      drag={!isMobile}
      dragMomentum={false}
      dragConstraints={{
        left: -initialX,
        top: 28 - initialY,
        right:
          window.innerWidth - (isMobile ? window.innerWidth : 420) - initialX,
        bottom:
          window.innerHeight - (isMobile ? window.innerHeight : 300) - initialY,
      }}
      onMouseDown={() => focusWindow(id)}
      initial={isMobile ? { y: "100%" } : { scale: 0.9, opacity: 0 }}
      animate={isMobile ? { y: 0 } : { scale: 1, opacity: 1 }}
      exit={isMobile ? { y: "100%" } : { scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      style={{
        zIndex: isMobile ? 2000 : windowState.zIndex,
        position: "fixed",
        left: isMobile ? 0 : initialX,
        top: isMobile ? 0 : initialY,
        width: isMobile ? "100vw" : "auto",
        height: isMobile ? "100vh" : "auto",
        maxWidth: "100vw",
        maxHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
      className={`liquid-glass window--${id} ${isMobile ? "window--mobile" : "rounded-lg"}`}
    >
      {/* Window Header */}
      <div className="window-header">
        <div className="window-controls">
          {!isMobile && (
            <>
              <button
                className="window-control window-control--maximize"
                title="Maximize"
              ></button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  minimizeWindow(id);
                }}
                className="window-control window-control--minimize"
                title="Minimize"
              ></button>
            </>
          )}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            className="window-control window-control--close"
            title="Close"
          ></button>
        </div>
      </div>

      {/* Window Content */}
      <div className="window-content custom-scrollbar">{children}</div>
    </motion.div>
  );
};
