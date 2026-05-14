import { LINKS } from "../../config/links";
import "./Projects.css";

const projectsData = [
  {
    title: "linuxCV",
    description: "Interactive CV styled as a Linux desktop environment.",
    tags: ["React", "TypeScript", "Framer Motion"],
    link: LINKS.projectRepo,
  },
  {
    title: "Project Two",
    description: "Description of another cool project.",
    tags: ["Node.js", "Express", "MongoDB"],
  },
];

const Projects = () => (
  <div className="projects">
    <div className="projects__grid">
      {projectsData.map((project, i) => (
        <div className="project-card" key={i}>
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__description">{project.description}</p>
          <div className="project-card__tags">
            {project.tags.map((tag) => (
              <span className="project-card__tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="project-card__link"
            >
              View Code →
            </a>
          )}
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
