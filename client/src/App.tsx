import { OSProvider } from "./context/OSProvider";
import { appConfigs } from "./config/appConfig";

import TopBar from "./components/TopBar/TopBar";
import Window from "./components/Window/Window";
import DesktopIcon from "./components/DesktopIcon/DesktopIcon";
import "./App.css";

const Desktop = () => {
  return (
    <div className="desktop">
      <TopBar />
      <div className="desktop-icons">
        {appConfigs.map((config) => (
          <DesktopIcon
            key={config.id}
            id={config.id}
            title={config.title}
            icon={config.icon}
          />
        ))}
      </div>

      {/* Windows Rendering */}
      {appConfigs.map((config) => (
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
