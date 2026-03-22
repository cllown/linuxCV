import React from "react";
import { motion } from "framer-motion";
import { useOS } from "./OSContext";

interface WindowProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const Window: React.FC<WindowProps> = ({ id, title, children }) => {
  const { windows, closeWindow, focusWindow, minimizeWindow } = useOS();

  const windowState = windows[id];
  if (!windowState || !windowState.isOpen || windowState.isMinimized)
    return null;

  return (
    <motion.div
      drag
      dragMomentum={false}
      dragConstraints={{
        left: 0,
        top: 0,
        right: window.innerWidth - 400,
        bottom: window.innerHeight - 300,
      }}
      onMouseDown={() => focusWindow(id)}
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      style={{
        zIndex: windowState.zIndex,
        position: "absolute",
        width: 420,
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
      }}
      className="liquid-glass rounded-lg overflow-hidden"
    >
      {/* Window Header */}
      <div className="window-header">
        <div className="window-controls">
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            className="window-control window-control--close"
            title="Close"
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
            className="window-control window-control--maximize"
            title="Maximize"
          />
        </div>
        <span className="window-header__title">{title}</span>
        <div style={{ width: 48 }} /> {/* Spacer for centering */}
      </div>

      {/* Window Content */}
      <div className="window-content custom-scrollbar">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
