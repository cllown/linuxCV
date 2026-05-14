import React from "react";
import "./Banner.css";
import { bannerConfig } from "../../config/bannerConfig";

interface BannerProps {
  onClick?: () => void;
  link?: string;
}

export const Banner: React.FC<BannerProps> = ({ onClick, link }) => {
  const targetLink = link || bannerConfig.link;

  const handleButtonClick = (e: React.MouseEvent) => {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div className="banner liquid-glass">
      <div className="banner__content">
        <h2 className="banner__title">
          {bannerConfig.title}{" "}
          <span className="gradient-text">{bannerConfig.subtitle}</span>
        </h2>
        <p className="banner__text">{bannerConfig.text}</p>
        <a
          href={targetLink}
          className="banner__button"
          onClick={handleButtonClick}
          target="_blank"
          rel="noopener noreferrer"
        >
          {bannerConfig.buttonLabel}
          <div className="banner__button-glow" />
        </a>
      </div>
    </div>
  );
};

export default Banner;
