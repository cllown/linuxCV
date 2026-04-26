import "./Education.css";
import educationIcon from "../../assets/education.svg";
import certIcon from "../../assets/certification.svg";

const Education = () => {
  return (
    <div className="education">
      <div className="education__header">
        <h1 className="education__title">
          Academic <span className="gradient-text">Background</span>
        </h1>
      </div>

      <div className="education__cards">
        {/* Card 1: Degree */}
        <div className="education-card">
          <div className="education-card__icon-box education-card__icon-box--purple">
            <img src={educationIcon} alt="Academic" />
          </div>
          <div className="education-card__content">
            <h3 className="education-card__title">Bachelor of Cybersecurity</h3>
            <p className="education-card__subtitle">
              National Aviation University (NAU), Kyiv
            </p>
            <div className="education-card__meta">
              <span className="education-card__year">2026</span>
              <span>• Information Security & Network Protection</span>
            </div>
          </div>
        </div>

        {/* Card 2: Certifications */}
        <div className="education-card">
          <div className="education-card__icon-box education-card__icon-box--teal">
            <img src={certIcon} alt="Certifications" />
          </div>
          <div className="education-card__content">
            <h3 className="education-card__title">Courses & Training</h3>
            <ul className="education-card__list">
              <li className="education-card__list-item">
                Modern Web Development (React & Node.js)
              </li>
              <li className="education-card__list-item">
                Cloud Architecture & Security
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
