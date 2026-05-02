import profileIcon from "../assets/profile.svg";
import experienceIcon from "../assets/experience.svg";
import educationIcon from "../assets/education.svg";
import techIcon from "../assets/tech.svg";
import contactIcon from "../assets/contact.svg";
import settingsIcon from "../assets/settings.svg";
import type { AppConfig } from "./types";

import AboutMe from "../pages/AboutMe/AboutMe";
import Experience from "../pages/Experience/Experience";
import Education from "../pages/Education/Education";
import TechStack from "../pages/TechStack/TechStack";
import Contact from "../pages/Contact/Contact";
import Admin from "../pages/Admin/Admin";

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
  {
    id: "admin",
    title: "Admin Panel",
    icon: settingsIcon,
    content: createElement(Admin),
    isAdminOnly: true,
  },
];
