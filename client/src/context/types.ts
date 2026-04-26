export type OSContextType = {
  windows: Record<string, WindowState>;
  activeWindowId: string | null;
  openWindow: (id: string, title: string) => void;
  closeWindow: (id: string) => void;
  minimizeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
};

export type WindowState = {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  zIndex: number;
};
