import { OSProvider } from "./context/OSProvider";
import { appConfigs } from "./config/appConfig";

import { TopBar } from "./components/topBar/TopBar";
import { Window } from "./components/window/Window";
import { DesktopIcon } from "./components/DesktopIcon/DesktopIcon";
import Chat from "./pages/Chat/Chat";
import "./App.css";
import Banner from "./components/banner/Banner";

const Desktop = () => {
  return (
    <div className="desktop">
      <TopBar />
      <Chat />
      <Banner />
      <div className="desktop-hint">
        💡 Click on folders to explore my workspace
      </div>
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
