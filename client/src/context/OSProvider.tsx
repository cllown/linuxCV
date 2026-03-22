import React, { useState, useCallback } from "react";
import { OSContext } from "./OSContext";
import type { WindowState } from "../types";

export const OSProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [windows, setWindows] = useState<Record<string, WindowState>>({});
  const [activeWindowId, setActiveWindowId] = useState<string | null>(null);
  const [maxZIndex, setMaxZIndex] = useState(10);

  const openWindow = useCallback(
    (id: string, title: string) => {
      setWindows((prev) => ({
        ...prev,
        [id]: {
          id,
          title,
          isOpen: true,
          isMinimized: false,
          zIndex: maxZIndex + 1,
        },
      }));
      setActiveWindowId(id);
      setMaxZIndex((prev) => prev + 1);
    },
    [maxZIndex],
  );

  const closeWindow = useCallback(
    (id: string) => {
      setWindows((prev) => {
        const rest = { ...prev };
        delete rest[id];
        return rest;
      });
      if (activeWindowId === id) setActiveWindowId(null);
    },
    [activeWindowId],
  );

  const focusWindow = useCallback(
    (id: string) => {
      setWindows((prev) => ({
        ...prev,
        [id]: { ...prev[id], zIndex: maxZIndex + 1, isMinimized: false },
      }));
      setActiveWindowId(id);
      setMaxZIndex((prev) => prev + 1);
    },
    [maxZIndex],
  );

  const minimizeWindow = useCallback(
    (id: string) => {
      setWindows((prev) => ({
        ...prev,
        [id]: { ...prev[id], isMinimized: true },
      }));
      if (activeWindowId === id) setActiveWindowId(null);
    },
    [activeWindowId],
  );

  return (
    <OSContext.Provider
      value={{
        windows,
        activeWindowId,
        openWindow,
        closeWindow,
        minimizeWindow,
        focusWindow,
      }}
    >
      {children}
    </OSContext.Provider>
  );
};
