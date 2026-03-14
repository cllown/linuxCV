import React from "react";
import {
  User,
  Briefcase,
  Code,
  GraduationCap,
  Layout,
  Mail,
} from "lucide-react";
import { OSProvider } from "./OSProvider";
import { useOS } from "./OSContext";

import Window from "./Window";
import "./App.css";

const ICON_SIZE = 48;

const DesktopIcon = ({
  id,
  title,
  icon: Icon,
  color,
}: {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
}) => {
  const { openWindow } = useOS();

  return (
    <div
      onClick={() => openWindow(id, title)}
      className="flex flex-col items-center gap-2 p-4 cursor-pointer hover:bg-white/10 rounded-xl transition-all group w-28"
    >
      <div
        className={`p-3 rounded-2xl shadow-lg group-hover:scale-110 transition-transform`}
        style={{ backgroundColor: color }}
      >
        <Icon size={ICON_SIZE} color="white" />
      </div>
      <span className="text-xs font-semibold text-center drop-shadow-md">
        {title}
      </span>
    </div>
  );
};

const Desktop = () => {
  const appConfigs = [
    {
      id: "about",
      title: "About Me",
      icon: User,
      color: "#3b82f6",
      content: <p>Fullstack Developer with a passion for creative UI.</p>,
    },
    {
      id: "experience",
      title: "Experience",
      icon: Briefcase,
      color: "#10b981",
      content: <p>My journey through the tech world...</p>,
    },
    {
      id: "projects",
      title: "Projects",
      icon: Layout,
      color: "#f59e0b",
      content: <p>Showcasing my latest work.</p>,
    },
    {
      id: "education",
      title: "Education",
      icon: GraduationCap,
      color: "#8b5cf6",
      content: <p>Lifelong learner.</p>,
    },
    {
      id: "tech",
      title: "Tech Stack",
      icon: Code,
      color: "#ec4899",
      content: <p>React, Node.js, TypeScript, and more.</p>,
    },
    {
      id: "contact",
      title: "Contact",
      icon: Mail,
      color: "#ef4444",
      content: <p>Let's get in touch!</p>,
    },
  ];

  return (
    <div className="desktop p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-1 gap-4 content-start h-screen">
      {appConfigs.map((config) => (
        <DesktopIcon key={config.id} {...config} />
      ))}

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
