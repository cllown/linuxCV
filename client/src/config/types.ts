import type { ReactNode } from "react";

export type AppConfig = {
  id: string;
  title: string;
  icon: string;
  content: ReactNode;
  isAdminOnly?: boolean;
};

export type BannerConfig = {
  title: string;
  subtitle: string;
  text: string;
  buttonLabel: string;
  link: string;
};
