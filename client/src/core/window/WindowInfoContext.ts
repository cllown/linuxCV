import { createContext, useContext } from "react";

type WindowInfo = {
  isMaximized: boolean;
  windowId: string;
};

export const WindowInfoContext = createContext<WindowInfo>({
  isMaximized: false,
  windowId: "",
});

export const useWindowInfo = () => useContext(WindowInfoContext);
