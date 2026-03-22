import CardGrid from "../../components/layouts/CardGrid";

const Projects = () => (
  <CardGrid
    columns={2}
    items={[
      {
        title: "linuxCV",
        description: "Interactive CV styled as a Linux desktop environment.",
        tags: ["React", "TypeScript", "Framer Motion"],
        link: "https://github.com/cllown/linuxCV",
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
