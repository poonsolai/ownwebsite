import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/Badge";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-visual">
        {project.image ? (
          <Image
            src={project.image}
            alt={`${project.name} preview`}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        ) : (
          <div className="project-visual-placeholder" aria-hidden="true">
            <span>{project.name.slice(0, 1)}</span>
          </div>
        )}
        <Badge tone={project.status === "Live" ? "lime" : "neutral"}>
          {project.status}
        </Badge>
      </div>
      <div className="project-card-content">
        <div className="project-card-kicker">
          <span>{project.category}</span>
          <span>PROJECT / {project.slug.toUpperCase()}</span>
        </div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <div className="inline-tags">
          {project.technologies.map((item) => (
            <Badge key={item}>{item}</Badge>
          ))}
        </div>
        <div className="project-card-links">
          <Link href={`/work/${project.slug}`}>
            Case study <ArrowUpRight size={14} />
          </Link>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              Source <Code2 size={14} />
            </a>
          )}
          {project.backendGithubUrl && (
            <a href={project.backendGithubUrl} target="_blank" rel="noopener noreferrer">
              Backend <Code2 size={14} />
            </a>
          )}
          {project.demoUrl && (
            <a href={project.demoUrl} target="_blank" rel="noreferrer">
              Live <ExternalLink size={13} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
