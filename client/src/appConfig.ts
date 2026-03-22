import profileIcon from "./assets/profile.svg";
import experienceIcon from "./assets/experience.svg";
import projectsIcon from "./assets/projects.svg";
import educationIcon from "./assets/education.svg";
import techIcon from "./assets/tech.svg";
import contactIcon from "./assets/contact.svg";
import type { ReactNode } from "react";

export interface AppConfig {
  id: string;
  title: string;
  icon: string;
  content: ReactNode;
}

export const appConfigs: AppConfig[] = [
  {
    id: "about",
    title: "About Me",
    icon: profileIcon,
    content: null,
  },
  {
    id: "experience",
    title: "Experience",
    icon: experienceIcon,
    content: null,
  },
  {
    id: "projects",
    title: "Projects",
    icon: projectsIcon,
    content: null,
  },
  {
    id: "education",
    title: "Education",
    icon: educationIcon,
    content: null,
  },
  {
    id: "tech",
    title: "Tech Stack",
    icon: techIcon,
    content: null,
  },
  {
    id: "contact",
    title: "Contact",
    icon: contactIcon,
    content: null,
  },
];
