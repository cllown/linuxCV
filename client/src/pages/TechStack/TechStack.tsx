import CardGrid from "../../components/layouts/CardGrid";

const TechStack = () => (
  <CardGrid
    columns={3}
    items={[
      { title: "React", tags: ["Frontend"] },
      { title: "TypeScript", tags: ["Language"] },
      { title: "Node.js", tags: ["Backend"] },
      { title: "Vite", tags: ["Tooling"] },
      { title: "Framer Motion", tags: ["Animation"] },
      { title: "CSS", tags: ["Styling"] },
    ]}
  />
);

export default TechStack;
