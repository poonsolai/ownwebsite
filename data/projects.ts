import projectData from "./projects.json";
import type { Project } from "@/types";

type ProjectRecord = Record<string, unknown>;

const imageFiles: Record<string, string> = {
  img4: "personal-management.png",
  img19: "auth-system.png",
  img20: "live-in-korea.png",
};

const featuredProjectIds = new Set([112, 111, 15, 114, 16, 17]);

const technologyLabels: Record<string, string> = {
  "bpptstrap": "Bootstrap",
  "node js": "Node.js",
  "mongo db": "MongoDB",
  "express js": "Express.js",
  javascript: "JavaScript",
  html: "HTML",
  css: "CSS",
  react: "React",
  "weather api": "Weather API",
};

function isRecord(value: unknown): value is ProjectRecord {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function requiredString(record: ProjectRecord, key: string): string {
  const value = record[key];
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Project data is missing a valid "${key}" value.`);
  }
  return value.trim();
}

function requiredId(record: ProjectRecord): number {
  const value = record.id;
  if (typeof value !== "number" || !Number.isSafeInteger(value)) {
    throw new Error("Project data contains an invalid project id.");
  }
  return value;
}

function requiredStringArray(record: ProjectRecord, key: string): string[] {
  const value = record[key];
  if (
    !Array.isArray(value) ||
    !value.every((item) => typeof item === "string" && item.trim() !== "")
  ) {
    throw new Error(`Project data contains an invalid "${key}" list.`);
  }
  return value.map((item: string) => {
    const trimmed = item.trim();
    return technologyLabels[trimmed.toLowerCase()] ?? trimmed;
  });
}

function optionalHttpsUrl(record: ProjectRecord, key: string): string | undefined {
  const value = record[key];
  if (value === undefined || value === null || value === "") {
    return undefined;
  }
  if (typeof value !== "string") {
    throw new Error(`Project data contains an invalid "${key}" URL.`);
  }

  let url: URL;
  try {
    url = new URL(value.trim());
  } catch {
    throw new Error(`Project data contains a malformed "${key}" URL.`);
  }
  if (url.protocol !== "https:") {
    throw new Error(`Project "${key}" links must use HTTPS.`);
  }
  return url.toString();
}

function imagePath(imageId: string): string {
  if (!/^img\d+$/.test(imageId)) {
    throw new Error(`Project data contains an invalid image reference: ${imageId}`);
  }
  const fileName = imageFiles[imageId] ?? `${imageId}.png`;
  return `/projects/${fileName}`;
}

function toProject(value: unknown): Project {
  if (!isRecord(value)) {
    throw new Error("Project data contains an invalid project record.");
  }

  const id = requiredId(value);
  const name = requiredString(value, "title");
  const description = requiredString(value, "description");
  const projectType = requiredString(value, "app");
  if (projectType !== "frontend" && projectType !== "fullstack") {
    throw new Error(`Project "${name}" has an unsupported app type.`);
  }

  const codeUrl = optionalHttpsUrl(value, "code");
  const backendCodeUrl = optionalHttpsUrl(value, "backcode");
  const demoUrl = optionalHttpsUrl(value, "live");

  return {
    slug: `${id}-${name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-|-$/g, "")}`,
    name,
    description,
    category: requiredString(value, "category"),
    projectType: projectType === "fullstack" ? "Full Stack" : "Frontend",
    status: demoUrl ? "Live" : "In progress",
    technologies: requiredStringArray(value, "tech"),
    image: imagePath(requiredString(value, "img")),
    demoUrl,
    githubUrl: codeUrl,
    backendGithubUrl:
      backendCodeUrl && backendCodeUrl !== codeUrl ? backendCodeUrl : undefined,
    featured: featuredProjectIds.has(id),
  };
}

if (!Array.isArray(projectData)) {
  throw new Error("Project data must be a JSON array.");
}

export const projects: Project[] = projectData.map(toProject);
export const featuredProjects = projects.filter((project) => project.featured);
