import "./Experience.css";
import factoryIcon from "../../shared/assets/icons/factory.svg";
import calendarIcon from "../../shared/assets/icons/calendar.svg";

const experienceData = [
  {
    id: 1,
    company: "GrainTrack",
    period: "2024 - Present",
    title: "Full-Stack Developer",
    description:
      "Designed and optimized an interactive, editable grid component using React 19 and RxJS for bulk data operations. Implemented custom parsing, copy/paste logic, and inline editing capable of handling up to 4,000 concurrent dynamic data points without performance degradation. Actively collaborated with stakeholders to define business requirements and write technical scenarios for a complex CTRM platform. Authored and maintained over 100 E2E and unit tests using Playwright and Vitest.",
    tags: [
      "React 19",
      "RxJS",
      "TypeScript",
      "Playwright",
      "Django",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    company: "Telegram Web App Project",
    period: "2024",
    title: "Frontend Architect",
    description:
      "Spearheaded the frontend architecture and development of an interactive mini-game built exclusively for the Telegram Web App ecosystem using React 19. Implemented complex UI animations and optimized rendering performance to ensure a seamless and highly responsive user experience within the resource constraints of Telegram WebView.",
    tags: ["React 19", "Telegram API", "Animations", "Performance"],
  },
  {
    id: 3,
    company: "Dangeons of Kitsu",
    period: "2024",
    title: "Frontend Developer",
    description:
      "Developed and integrated interactive features for a web-based game deployed directly as a Telegram Web App. Utilized React to build responsive and engaging user interfaces, successfully delivering the required functionality within a rapid 1-month development cycle.",
    tags: ["React", "Mobile Optimization", "Rapid Development"],
  },
];

const Experience = () => {
  return (
    <div className="experience-page">
      <header className="experience-header">
        <h1>
          Professional <span className="text-accent">Journey</span>
        </h1>
      </header>

      <div className="experience-container">
        <div className="experience-list">
          {experienceData.map((item) => (
            <div key={item.id} className="experience-card">
              <div className="card-top">
                <div className="company-info">
                  <img src={factoryIcon} alt="" className="card-icon" />
                  <span>{item.company}</span>
                </div>
                <div className="period-info">
                  <img src={calendarIcon} alt="" className="card-icon" />
                  <span>{item.period}</span>
                </div>
              </div>

              <h2 className="card-title">{item.title}</h2>

              <p className="card-description">{item.description}</p>

              <div className="card-tags">
                {item.tags.map((tag, index) => (
                  <span key={index} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="experience-timeline">
          <div className="timeline-line"></div>
          <div className="timeline-markers">
            {experienceData.map((item, index) => (
              <div
                key={item.id}
                className={`marker ${index === 0 ? "active" : ""}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
