import React from "react";
import { useOS } from "../../context/OSContext";
import { appConfigs } from "../../config/appConfig";
import "./MobileNav.css";

export const MobileNav: React.FC = () => {
  const { isAdmin, openWindow, activeWindowId } = useOS();

  const visibleApps = appConfigs.filter((app) => !app.isAdminOnly || isAdmin);

  return (
    <nav className="mobile-nav liquid-glass">
      {visibleApps.map((app) => (
        <button
          key={app.id}
          className={`mobile-nav__item ${activeWindowId === app.id ? "active" : ""}`}
          onClick={() => openWindow(app.id, app.title)}
        >
          <img src={app.icon} alt={app.title} className="mobile-nav__icon" />
          <span className="mobile-nav__label">{app.title.split(" ")[0]}</span>
        </button>
      ))}
    </nav>
  );
};
