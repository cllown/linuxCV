import { OSProvider } from "./OSProvider";
import { useOS } from "./OSContext";
import { appConfigs } from "./appConfig";

import TopBar from "./TopBar";
import Window from "./Window";
import "./App.css";

const DesktopIcon = ({
  id,
  title,
  icon,
}: {
  id: string;
  title: string;
  icon: string;
}) => {
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
