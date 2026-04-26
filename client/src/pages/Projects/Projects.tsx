import CardGrid from "../../components/layouts/CardGrid";
import { LINKS } from "../../config/links";

const Projects = () => (
  <CardGrid
    columns={2}
    items={[
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
    ]}
  />
);

export default Projects;
