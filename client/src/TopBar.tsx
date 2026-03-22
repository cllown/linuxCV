import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useOS } from "./OSContext";
import "./TopBar.css";

import wifiIcon from "./assets/panel/wifi1.svg";
import soundIcon from "./assets/panel/sound.svg";
import batteryIcon from "./assets/panel/battery.svg";

const TopBar = () => {
  const { windows, activeWindowId } = useOS();
  const [time, setTime] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const activeTitle =
    activeWindowId && windows[activeWindowId]?.isOpen
      ? windows[activeWindowId].title
      : "Activities";

  const hhmm = time.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });
  const dayName = time.toLocaleDateString("en-US", { weekday: "short" });
  const monthName = time.toLocaleDateString("en-US", { month: "long" });
  const dayNum = time.getDate();

  return (
    <div className="topbar">
      <div className="topbar__left">
        <span className="topbar__user">~/artur.dev</span>
        <AnimatePresence mode="wait">
          <motion.span
            key={activeTitle}
            className="topbar__active"
            initial={{ y: -12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 12, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            {activeTitle}
          </motion.span>
        </AnimatePresence>
      </div>
      <div className="topbar__center">
        <span className="topbar__clock">{hhmm}</span>
        <span className="topbar__date">{` ${dayName}, ${monthName} ${dayNum}`}</span>
      </div>
      <div className="topbar__right">
        <img src={wifiIcon} alt="WiFi" className="topbar__icon" />
        <img src={soundIcon} alt="Sound" className="topbar__icon" />
        <img src={batteryIcon} alt="Battery" className="topbar__icon" />
        <span className="topbar__battery">100%</span>
        <div className="topbar__avatar">A</div>
      </div>
    </div>
  );
};

export default TopBar;
