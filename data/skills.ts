import type { SkillGroup } from "@/types";
import { learningTrack } from "@/data/learning";
import { personal } from "@/data/personal";

export const skillGroups: SkillGroup[] = [
  {
    name: "Frontend",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Next.js", "Bootstrap"],
  },
  { name: "Backend", skills: ["Node.js", "Express.js", "REST APIs", "Authentication"] },
  { name: "Database", skills: ["MongoDB", "SQL"] },
  { name: "AI", skills: ["Python", "AI APIs(Learning)", "LLM concepts(Learning)", "Automation(Learning)"] },
  { name: "Tools", skills: ["Git", "GitHub", "VS Code", "Postman", "Vercel","Render"] },
  { name: "Cloud", skills: ["Cloud fundamentals", "Deployment"] },
];

export type SkillStageGroup = {
  title: "Known" | "Learning" | "Exploring";
  description: string;
  skills: string[];
};

export const skillCategoryStages: Record<string, SkillStageGroup["title"]> = {
  Frontend: "Known",
  Backend: "Known",
  Database: "Learning",
  AI: "Learning",
  Tools: "Known",
  Cloud: "Exploring",
};

export const skillStages: SkillStageGroup[] = [
  {
    title: "Known",
    description:
      "Technologies currently listed in my profile. This reflects my working stack, not a claim of expertise.",
    skills: personal.technologies,
  },
  {
    title: "Learning",
    description: "Topics explicitly listed as current learning in my profile.",
    skills: learningTrack.currentlyLearning,
  },
  {
    title: "Exploring",
    description:
      "Topics on my next-to-learn list; these are future learning interests, not current progress claims.",
    skills: learningTrack.nextToLearn,
  },
];

export const skillUseCases: Record<string, string> = {
  HTML: "Structure page content with semantic, accessible markup.",
  CSS: "Style layouts, responsive behavior, and interface states.",
  JavaScript: "Add behavior and logic to browser experiences.",
  TypeScript: "Describe data and catch type mismatches during development.",
  React: "Compose interactive interfaces from reusable components.",
  "Next.js": "Build routed React applications and server-rendered pages.",
  Bootstrap: "Assemble responsive layouts with a component utility system.",
  "Node.js": "Run JavaScript outside the browser for application services.",
  "Express.js": "Define web server routes and middleware.",
  "REST APIs": "Connect applications through resource-oriented HTTP endpoints.",
  Authentication: "Manage identity and access in an application.",
  MongoDB: "Store and query document-oriented application data.",
  SQL: "Model and query relational data.",
  Python: "Write scripts, automation, and data-oriented applications.",
  "AI APIs": "Connect application features to hosted AI models and services.",
  "LLM concepts": "Understand language-model capabilities, context, and limitations.",
  Automation: "Reduce repetitive work with repeatable scripts and workflows.",
  Git: "Track code changes and collaborate through version history.",
  GitHub: "Host repositories and coordinate software collaboration.",
  "VS Code": "Edit code with an extensible development environment.",
  Postman: "Send requests to inspect and test APIs.",
  "Cloud fundamentals": "Understand the services that host and support applications.",
  Deployment: "Build and release an application to a runtime environment.",
};

export const skillProficiency: Record<string, number> = {
  HTML: 82,
  CSS: 86,
  JavaScript: 89,
  TypeScript: 84,
  React: 88,
  "Next.js": 86,
  Bootstrap: 72,
  "Node.js": 78,
  "Express.js": 71,
  "REST APIs": 82,
  Authentication: 74,
  MongoDB: 77,
  SQL: 66,
  Python: 76,
  "AI APIs": 63,
  "LLM concepts": 68,
  Automation: 79,
  Git: 91,
  GitHub: 90,
  "VS Code": 94,
  Postman: 72,
  "Cloud fundamentals": 62,
  Deployment: 68,
};