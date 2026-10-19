import type { NavigationItem } from "@/types";

export const navigationItems: NavigationItem[] = [
  { label: "Home", translationKey: "navHome", href: "/", icon: "house", group: "Explore" },
  { label: "About", translationKey: "navAbout", href: "/about", icon: "user-round", group: "Explore" },
  { label: "Journey", translationKey: "navJourney", href: "/journey", icon: "route", group: "Explore" },
  { label: "Skills", translationKey: "navSkills", href: "/skills", icon: "layers-3", group: "Explore" },
  { label: "Learning", translationKey: "navLearning", href: "/learning", icon: "book-open", group: "Explore" },
  { label: "Now", translationKey: "navNow", href: "/now", icon: "focus", group: "Explore" },
  { label: "Work", translationKey: "navWork", href: "/work", icon: "briefcase-business", group: "Explore" },
  { label: "Notes", translationKey: "navNotes", href: "/notes", icon: "notebook-pen", group: "Workspace" },
  { label: "Contact", translationKey: "navContact", href: "/contact", icon: "send", group: "Connect" },
];