import React from "react";
import { motion } from "framer-motion";

import { X, Minus, Square } from "lucide-react";
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
      style={{
        zIndex: windowState.zIndex,
        position: "absolute",
        width: 400,
        minHeight: 300,
        display: "flex",
        flexDirection: "column",
      }}
      className="liquid-glass rounded-lg overflow-hidden"
    >
      {/* Window Header */}
      <div className="flex items-center justify-between p-3 bg-white/10 cursor-move select-none">
        <span className="text-sm font-medium">{title}</span>
        <div className="flex gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              minimizeWindow(id);
            }}
            className="p-1 hover:bg-white/10 rounded transition-colors"
          >
            <Minus size={14} />
          </button>
          <button className="p-1 hover:bg-white/10 rounded transition-colors">
            <Square size={12} />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeWindow(id);
            }}
            className="p-1 hover:bg-red-500/50 rounded transition-colors"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="flex-1 p-4 overflow-auto custom-scrollbar">
        {children}
      </div>
    </motion.div>
  );
};

export default Window;
