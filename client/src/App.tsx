import { useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import { OSProvider } from "./context/OSProvider";
import { useOS } from "./context/OSContext";
import { appConfigs } from "./config/appConfig";

import { TopBar } from "./components/topBar/TopBar";
import { Window } from "./components/window/Window";
import { DesktopIcon } from "./components/DesktopIcon/DesktopIcon";
import { Taskbar } from "./components/Taskbar/Taskbar";
import "./App.css";
import Banner from "./components/banner/Banner";

const Desktop = () => {
  const { isAdmin, setIsAdmin, isMobile, windows } = useOS();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.altKey && e.code === "KeyA") {
        e.preventDefault();
        const newState = !isAdmin;
        setIsAdmin(newState);
        console.log(`Admin mode: ${newState ? "ENABLED" : "DISABLED"}`);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isAdmin, setIsAdmin]);

  const visibleApps = appConfigs.filter((app) => !app.isAdminOnly || isAdmin);

  return (
    <div className={`desktop ${isMobile ? "desktop--mobile" : ""}`}>
      <TopBar />
      <Banner />

      {!isMobile && (
        <>
          <div className="desktop-status">
            <span className="desktop-status-dot" />
            Available for opportunities
          </div>
          <div className="desktop-hint">
            💡 Click on folders to explore my workspace
          </div>
        </>
      )}

      <div className="desktop-icons">
        {visibleApps.map((config) => (
          <DesktopIcon
            key={config.id}
            id={config.id}
            title={config.title}
            icon={config.icon}
          />
        ))}
      </div>

      {visibleApps.map((config) => (
        <Window key={config.id} id={config.id} title={config.title}>
          {config.content}
        </Window>
      ))}

      <AnimatePresence>
        {!isMobile && Object.keys(windows).length > 0 && <Taskbar />}
      </AnimatePresence>
    </div>
  );
};

function App() {
  return (
    <OSProvider>
      <Desktop />
    </OSProvider>
  );
}

export default App;
