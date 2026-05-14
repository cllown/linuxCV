export type OSContextType = {
  windows: Record<string, WindowState>;
  activeWindowId: string | null;
  isAdmin: boolean;
  setIsAdmin: (val: boolean) => void;
  isMobile: boolean;
  openWindow: (id: string, title: string) => void;
  closeWindow: (id: string) => void;
  toggleMinimize: (id: string) => void;
  focusWindow: (id: string) => void;
  toggleMaximize: (id: string) => void;
};

export type WindowState = {
  id: string;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
};
