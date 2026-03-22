import { createContext, useContext } from "react";
import type { OSContextType } from "../types";

export const OSContext = createContext<OSContextType | undefined>(undefined);

export const useOS = () => {
  const context = useContext(OSContext);
  if (!context) throw new Error("useOS must be used within OSProvider");
  return context;
};
