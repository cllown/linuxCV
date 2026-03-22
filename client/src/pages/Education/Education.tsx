import TimelineLayout from "../../components/layouts/TimelineLayout";
import certIcon from "../../assets/certification.svg";

const Education = () => (
  <TimelineLayout
    items={[
      {
        title: "Bachelor's Degree in Computer Science",
        subtitle: "University Name",
        period: "2020 — 2024",
        description:
          "Core coursework in algorithms, data structures, and software engineering.",
        icon: certIcon,
      },
      {
        title: "Online Courses & Certifications",
        subtitle: "Various Platforms",
        period: "2021 — present",
        description:
          "Continuous learning in modern web technologies and cloud services.",
        icon: certIcon,
      },
    ]}
  />
);

export default Education;
