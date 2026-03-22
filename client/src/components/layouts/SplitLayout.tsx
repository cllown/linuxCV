import React from "react";
import "./layouts.css";

interface SplitLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  reverse?: boolean;
}

const SplitLayout: React.FC<SplitLayoutProps> = ({
  left,
  right,
  reverse = false,
}) => {
  return (
    <div className={`split-layout ${reverse ? "split-layout--reverse" : ""}`}>
      <div className="split-layout__side">{left}</div>
      <div className="split-layout__side">{right}</div>
    </div>
  );
};

export default SplitLayout;
