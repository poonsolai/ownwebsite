"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { skillGroups } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslations } from "@/hooks/useTranslations";

const groupKeys = {
  Frontend: "skillFrontend",
  Backend: "skillBackend",
  Database: "skillDatabase",
  AI: "skillAI",
  Tools: "skillTools",
  Cloud: "skillCloud",
} as const;

export function SkillsOverview() {
  const t = useTranslations();

  return (
    <Reveal className="home-section">
      <section aria-labelledby="skills-title">
        <SectionHeading
          id="skills-title"
          index="04"
          eyebrow={t("skillsEyebrow")}
          title={t("skillsTitle")}
          description={t("skillsDescription")}
        />
        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              className={`skill-group skill-group-${index + 1}`}
              key={group.name}
            >
              <div className="skill-group-heading">
                <span>0{index + 1}</span>
                <h3>{t(groupKeys[group.name as keyof typeof groupKeys])}</h3>
              </div>
              <div className="skill-chips">
                {group.skills.map((skill) => (
                  <span className="skill-chip" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
        <Link className="text-link section-tail-link" href="/skills">
          {t("exploreSkills")} <ArrowUpRight size={14} />
        </Link>
      </section>
    </Reveal>
  );
}
