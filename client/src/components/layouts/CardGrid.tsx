import React from "react";
import "./layouts.css";

export interface CardItem {
  title: string;
  description?: string;
  icon?: string;
  tags?: string[];
  link?: string;
}

interface CardGridProps {
  items: CardItem[];
  columns?: 2 | 3;
}

const CardGrid: React.FC<CardGridProps> = ({ items, columns = 2 }) => {
  return (
    <div className={`card-grid card-grid--cols-${columns}`}>
      {items.map((item, i) => (
        <div className="card" key={i}>
          {item.icon && <img src={item.icon} alt="" className="card__icon" />}
          <h3 className="card__title">{item.title}</h3>
          {item.description && <p className="card__desc">{item.description}</p>}
          {item.tags && (
            <div className="card__tags">
              {item.tags.map((tag) => (
                <span className="card__tag" key={tag}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          {item.link && (
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="card__link"
            >
              View →
            </a>
          )}
        </div>
      ))}
    </div>
  );
};

export default CardGrid;
