export type Note = {
  title: string;
  description: string;
  category: string;
  date: string;
  tags: string[];
  readingTime: string;
};

export const notes: Note[] = [
  {
    title: "Building a personal knowledge base",
    description: "The practical value of structuring notes around context, not just topics.",
    category: "Next.js",
    date: "2025-01-15",
    tags: ["portfolio", "content", "structure"],
    readingTime: "5 min",
  },
  {
    title: "The difference between UI polish and product clarity",
    description: "Design details matter when they support understanding and interaction, not when they add noise.",
    category: "React",
    date: "2025-02-03",
    tags: ["ux", "design", "systems"],
    readingTime: "4 min",
  },
  {
    title: "TypeScript patterns I keep returning to",
    description: "A short review of the utility patterns that make interfaces easier to extend and reason about.",
    category: "TypeScript",
    date: "2025-02-18",
    tags: ["types", "ts", "architecture"],
    readingTime: "7 min",
  },
  {
    title: "Framing AI as a tool, not a gimmick",
    description: "A practical way to evaluate AI features by their usefulness in a real workflow.",
    category: "AI",
    date: "2025-03-02",
    tags: ["ai", "workflow", "product"],
    readingTime: "6 min",
  },
  {
    title: "What I look for in a good backend boundary",
    description: "Where business logic, API design, and frontend responsibility should separate.",
    category: "Backend",
    date: "2025-03-12",
    tags: ["backend", "api", "architecture"],
    readingTime: "8 min",
  },
];
