import { useOS } from "../../context/OSContext";
import "./DesktopIcon.css";
import type { DesktopIconProps } from "./types";

export const DesktopIcon = ({ id, title, icon }: DesktopIconProps) => {
  const { openWindow } = useOS();

  return (
    <div onClick={() => openWindow(id, title)} className="desktop-icon">
      <div className="desktop-icon__container">
        <img src={icon} alt={title} className="desktop-icon__img" />
      </div>
      <span className="desktop-icon__label">{title}</span>
    </div>
  );
};
