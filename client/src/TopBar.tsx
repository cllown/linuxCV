import { useState, useEffect } from "react";
import { useOS } from "./OSContext";
import "./TopBar.css";

const TopBar = () => {
  const { windows, activeWindowId } = useOS();
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const activeTitle = activeWindowId && windows[activeWindowId]?.isOpen
    ? windows[activeWindowId].title
    : null;

  const formatTime = (d: Date) =>
    d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  return (
    <div className="topbar">
      <div className="topbar__left">
        <span className="topbar__user">artur</span>
        {activeTitle && (
          <>
            <span className="topbar__sep">·</span>
            <span className="topbar__active">{activeTitle}</span>
          </>
        )}
      </div>
      <div className="topbar__center">
        <span className="topbar__clock">{formatTime(time)}</span>
      </div>
      <div className="topbar__right" />
    </div>
  );
};

export default TopBar;
