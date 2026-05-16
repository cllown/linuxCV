import './Education.css';
import educationIcon from '@/shared/assets/icons/education.svg';
import certIcon from '@/shared/assets/icons/certification.svg';
import languageIcon from '@/shared/assets/icons/tech.svg';

const courses = [
  { name: 'Python', level: 'Advanced' },
  { name: 'JavaScript / TypeScript', level: 'Advanced' },
  { name: 'React & Angular', level: 'Advanced' },
  { name: 'Node.js & Express', level: 'Intermediate' },
];

const Education = () => {
  return (
    <div className="education">
      <div className="education__header">
        <h1 className="education__title">
          Academic <span className="gradient-text">Background</span>
        </h1>
        <p className="education__subtitle">Formal education &amp; professional training</p>
      </div>

      <div className="education__cards">
        <div className="education-card">
          <div className="education-card__icon-box education-card__icon-box--purple">
            <img src={educationIcon} alt="Academic" />
          </div>
          <div className="education-card__content">
            <h3 className="education-card__title">Bachelor of Cybersecurity</h3>
            <p className="education-card__subtitle">Kyiv Aviation Institute (KAI), formerly NAU</p>
            <p className="education-card__department">
              Faculty of Information Security &amp; Cybersecurity (BICS)
            </p>
            <div className="education-card__meta">
              <span className="education-card__year">2026</span>
              <span>• Cybersecurity &amp; Information Protection</span>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="education-card__icon-box education-card__icon-box--teal">
            <img src={certIcon} alt="Certifications" />
          </div>
          <div className="education-card__content">
            <h3 className="education-card__title">Programming Courses</h3>
            <ul className="education-card__list">
              {courses.map((course) => (
                <li key={course.name} className="education-card__list-item">
                  <img className="education-card__list-icon" src={languageIcon} alt="" />
                  <span className="education-card__list-name">{course.name}</span>
                  <span
                    className={`education-card__badge education-card__badge--${course.level.toLowerCase()}`}
                  >
                    {course.level}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
