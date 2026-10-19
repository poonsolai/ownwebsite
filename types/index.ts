export type NavigationItem = {
  label: string;
  translationKey: import("@/data/translations").MessageKey;
  href: string;
  icon: string;
  group: "Explore" | "Workspace" | "Connect";
};

export type ProjectStatus = "In progress" | "Live" | "Archived";

export type Project = {
  slug: string;
  name: string;
  description: string;
  category: string;
  projectType: "Full Stack" | "Frontend";
  status: ProjectStatus;
  technologies: string[];
  image?: string;
  githubUrl?: string;
  backendGithubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  architecture?: string[];
  challenges?: string[];
  whatILearned?: string[];
  screenshots?: string[];
  nextProject?: string;
};

export type SkillGroup = {
  name: string;
  skills: string[];
};

export type Milestone = {
  title: string;
  description: string;
  date?: string;
  status: "complete" | "current" | "upcoming";
};

export type LearningTrack = {
  currentlyLearning: string[];
  completed: string[];
  inProgress: string[];
  nextToLearn: string[];
};

export type Goal = {
  title: string;
  description: string;
  horizon: "Near term" | "Next" | "Long term";
  accent: "lime" | "blue" | "coral";
};