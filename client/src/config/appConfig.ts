import profileIcon from "../assets/profile.svg";
import experienceIcon from "../assets/experience.svg";
import projectsIcon from "../assets/projects.svg";
import educationIcon from "../assets/education.svg";
import techIcon from "../assets/tech.svg";
import contactIcon from "../assets/contact.svg";
import type { AppConfig } from "../types";

import AboutMe from "../pages/AboutMe/AboutMe";
import Experience from "../pages/Experience/Experience";
import Projects from "../pages/Projects/Projects";
import Education from "../pages/Education/Education";
import TechStack from "../pages/TechStack/TechStack";
import Contact from "../pages/Contact/Contact";

import { createElement } from "react";

export const appConfigs: AppConfig[] = [
  {
    id: "about",
    title: "About Me",
    icon: profileIcon,
    content: createElement(AboutMe),
  },
  {
    id: "experience",
    title: "Experience",
    icon: experienceIcon,
    content: createElement(Experience),
  },
  {
    id: "projects",
    title: "Projects",
    icon: projectsIcon,
    content: createElement(Projects),
  },
  {
    id: "education",
    title: "Education",
    icon: educationIcon,
    content: createElement(Education),
  },
  {
    id: "tech",
    title: "Tech Stack",
    icon: techIcon,
    content: createElement(TechStack),
  },
  {
    id: "contact",
    title: "Contact",
    icon: contactIcon,
    content: createElement(Contact),
  },
];
