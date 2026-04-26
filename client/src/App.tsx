import { useEffect } from "react";
import { OSProvider } from "./context/OSProvider";
import { useOS } from "./context/OSContext";
import { appConfigs } from "./config/appConfig";

import { TopBar } from "./components/topBar/TopBar";
import { Window } from "./components/window/Window";
import { DesktopIcon } from "./components/DesktopIcon/DesktopIcon";
import Chat from "./pages/Chat/Chat";
import "./App.css";
import Banner from "./components/banner/Banner";

const Desktop = () => {
  const { isAdmin, setIsAdmin } = useOS();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Secret key combo: Ctrl + Alt + A (KeyA is more reliable)
      if (e.ctrlKey && e.altKey && e.code === "KeyA") {
        e.preventDefault(); // Prevent browser default behavior
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
    <div className="desktop">
      <TopBar />
      <Chat />
      <Banner />
      <div className="desktop-hint">
        💡 Click on folders to explore my workspace
      </div>
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
