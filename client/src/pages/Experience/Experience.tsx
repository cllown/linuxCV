import TimelineLayout from "../../components/layouts/TimelineLayout";
import factoryIcon from "../../assets/factory.svg";

const Experience = () => (
  <TimelineLayout
    items={[
      {
        title: "Fullstack Developer",
        subtitle: "Company Name",
        period: "2024 — present",
        description:
          "Building modern web applications with React, Node.js, and TypeScript.",
        icon: factoryIcon,
      },
      {
        title: "Frontend Developer",
        subtitle: "Previous Company",
        period: "2022 — 2024",
        description:
          "Developed responsive UI components and integrated REST APIs.",
        icon: factoryIcon,
      },
    ]}
  />
);

export default Experience;
