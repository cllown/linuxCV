import React from "react";
import "./layouts.css";

export interface TimelineItem {
  title: string;
  subtitle?: string;
  period?: string;
  description?: string;
  icon?: string;
}

interface TimelineLayoutProps {
  items: TimelineItem[];
}

const TimelineLayout: React.FC<TimelineLayoutProps> = ({ items }) => {
  return (
    <div className="timeline">
      {items.map((item, i) => (
        <div className="timeline__item" key={i}>
          <div className="timeline__marker" />
          <div className="timeline__content">
            <div className="timeline__header">
              {item.icon && (
                <img src={item.icon} alt="" className="timeline__icon" />
              )}
              <div>
                <h3 className="timeline__title">{item.title}</h3>
                {item.subtitle && (
                  <span className="timeline__subtitle">{item.subtitle}</span>
                )}
              </div>
            </div>
            {item.period && (
              <span className="timeline__period">{item.period}</span>
            )}
            {item.description && (
              <p className="timeline__desc">{item.description}</p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TimelineLayout;
