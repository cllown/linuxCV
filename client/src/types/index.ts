import type { ReactNode } from "react";

export interface WindowState {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
}

export interface OSContextType {
  windows: Record<string, WindowState>;
  activeWindowId: string | null;
  openWindow: (id: string, title: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
}

export interface AppConfig {
  id: string;
  title: string;
  icon: string;
  content: ReactNode;
}
