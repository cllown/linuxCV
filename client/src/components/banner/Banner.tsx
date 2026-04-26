import React from "react";
import "./Banner.css";
import { bannerConfig } from "../../config/bannerConfig";

interface BannerProps {
  onClick?: () => void;
}

export const Banner: React.FC<BannerProps> = ({ onClick }) => {
  return (
    <div className="banner liquid-glass">
      <div className="banner__content">
        <h2 className="banner__title">
          {bannerConfig.title}{" "}
          <span className="gradient-text">{bannerConfig.subtitle}</span>
        </h2>
        <p className="banner__text">{bannerConfig.text}</p>
        <button className="banner__button" onClick={onClick}>
          {bannerConfig.buttonLabel}
          <div className="banner__button-glow" />
        </button>
      </div>
    </div>
  );
};

export default Banner;
