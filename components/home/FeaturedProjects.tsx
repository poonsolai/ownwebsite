"use client";

import Link from "next/link";
import { ArrowUpRight, FolderKanban } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ProjectCard } from "@/components/home/ProjectCard";
import { useTranslations } from "@/hooks/useTranslations";

export function FeaturedProjects() {
  const t = useTranslations();

  return (
    <Reveal className="home-section">
      <section aria-labelledby="projects-title">
        <SectionHeading
          id="projects-title"
          index="03"
          eyebrow={t("workEyebrow")}
          title={t("workTitle")}
          description={t("workDescription")}
        />
        {featuredProjects.length > 0 ? (
          <div className="projects-grid">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : (
          <div className="empty-project-state">
            <div className="empty-project-symbol">
              <FolderKanban aria-hidden="true" size={22} />
            </div>
            <div>
              <span className="micro-label">{t("workEmptyLabel")}</span>
              <h3>{t("workEmptyTitle")}</h3>
              <p>{t("workEmptyDescription")}</p>
            </div>
            <Link href="/work" aria-label={t("openArchive")}>
              <ArrowUpRight size={18} />
            </Link>
          </div>
        )}
        <Link className="text-link section-tail-link" href="/work">
          {t("browseWork")} <ArrowUpRight size={14} />
        </Link>
      </section>
    </Reveal>
  );
}
