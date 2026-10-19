"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Cloud,
  Code2,
  Database,
  Layers3,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import {
  skillCategoryStages,
  skillGroups,
  skillProficiency,
} from "@/data/skills";
import styles from "./skills.module.css";

const groupIcons: Record<string, LucideIcon> = {
  Frontend: Code2,
  Backend: Server,
  Database,
  AI: Bot,
  Tools: Wrench,
  Cloud,
};

const skillHighlights: Record<string, string> = {
  Frontend:
    "Responsive interfaces, reusable components, and thoughtful user experiences.",
  Backend:
    "Reliable APIs and application services built around real product needs.",
  Database:
    "Practical data modeling for document and relational databases.",
  AI: "AI APIs, language-model concepts, and useful automations.",
  Tools: "Development workflows that make building and collaboration smoother.",
  Cloud: "Cloud fundamentals and the path from development to deployment.",
};

const filters = ["All", "Known", "Learning", "Exploring"] as const;

export function SkillsCatalog() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const visibleGroups = useMemo(
    () =>
      skillGroups.filter(
        (group) =>
          activeFilter === "All" ||
          skillCategoryStages[group.name] === activeFilter,
      ),
    [activeFilter],
  );

  return (
    <>
      <div className={styles.catalogHeader}>
        <div>
          <p className={styles.sectionEyebrow}>THE TOOLKIT</p>
          <h2>Skills I use to build ideas</h2>
          <p>
            A snapshot of what I know, what I’m learning, and what I’m excited
            to explore next.
          </p>
        </div>
        <div className={styles.filterGroup} aria-label="Filter skills by stage">
          {filters.map((filter) => (
            <button
              key={filter}
              type="button"
              aria-pressed={activeFilter === filter}
              className={
                activeFilter === filter
                  ? `${styles.filterButton} ${styles.filterActive}`
                  : styles.filterButton
              }
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.skillGrid} aria-live="polite">
        {visibleGroups.map((group) => {
          const Icon = groupIcons[group.name] ?? Layers3;
          const stage = skillCategoryStages[group.name] ?? "Known";
          const averageLevel = Math.round(
            group.skills.reduce(
              (total, skill) => total + (skillProficiency[skill] ?? 60),
              0,
            ) / group.skills.length,
          );

          return (
            <article className={styles.skillCard} key={group.name}>
              <div className={styles.cardTop}>
                <span className={styles.skillIcon}>
                  <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                </span>
                <span className={styles.stageBadge} data-stage={stage}>
                  <i aria-hidden="true" />
                  {stage}
                </span>
              </div>

              <div className={styles.cardCopy}>
                <h3>{group.name === "AI" ? "AI & Machine Learning" : group.name}</h3>
                <p>{skillHighlights[group.name]}</p>
              </div>

              <div className={styles.chipList}>
                {group.skills.slice(0, 3).map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
                {group.skills.length > 3 && (
                  <span className={styles.extraChip}>+{group.skills.length - 3}</span>
                )}
              </div>

              <div className={styles.cardFooter}>
                <span>{group.skills.length} technologies</span>
                <span>{averageLevel}% familiar</span>
              </div>
              <div
                className={styles.progressTrack}
                role="meter"
                aria-label={`${group.name} familiarity`}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={averageLevel}
              >
                <span style={{ width: `${averageLevel}%` }} />
              </div>

              <Link
                href={`/skills/${group.name.toLowerCase()}`}
                className={styles.cardAction}
                aria-label={`View ${group.name} skill details`}
              >
                View details <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </article>
          );
        })}
      </div>
    </>
  );
}
