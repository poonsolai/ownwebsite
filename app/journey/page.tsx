import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Code2,
  Compass,
  Flag,
  FolderKanban,
  GraduationCap,
  Layers3,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { personal } from "@/data/personal";
import { journeyTimeline, type JourneyTimelineItem } from "@/data/journey";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./journey.module.css";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "The chapters, learning, and direction shaping my path as a developer.",
};

const chapterIcons: Record<string, LucideIcon> = {
  education: GraduationCap,
  beginning: Code2,
  technologies: Layers3,
  milestones: Flag,
  projects: FolderKanban,
  "current-stage": Compass,
  "future-direction": Sparkles,
};

const statusLabels: Record<JourneyTimelineItem["status"], string> = {
  pending: "Details to add",
  current: "Current chapter",
  upcoming: "Looking ahead",
};

function JourneyTimeline() {
  return (
    <ol className={styles.timeline}>
      {journeyTimeline.map((item, index) => {
        const Icon = chapterIcons[item.id] ?? BookOpen;
        const isCurrent = item.status === "current";

        return (
          <li className={styles.timelineItem} key={item.id}>
            <span
              className={styles.timelineMarker}
              data-current={isCurrent}
              aria-hidden="true"
            >
              <Icon size={15} />
            </span>
            <details className={styles.chapter} open={isCurrent}>
              <summary className={styles.chapterSummary}>
                <span className={styles.chapterIndex}>0{index + 1}</span>
                <span className={styles.chapterHeading}>
                  <span className={styles.chapterTitle}>{item.title}</span>
                  <span className={styles.chapterPeriod}>{item.period}</span>
                </span>
                <span
                  className={styles.chapterStatus}
                  data-status={item.status}
                >
                  {statusLabels[item.status]}
                </span>
                <ArrowDown
                  className={styles.chapterToggle}
                  aria-hidden="true"
                  size={15}
                />
              </summary>
              <div className={styles.chapterBody}>
                <p>{item.description}</p>
                {item.technologies.length > 0 && (
                  <ul
                    className={styles.technologyList}
                    aria-label="Technologies"
                  >
                    {item.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                )}
                {item.relatedProject && (
                  <Link
                    className={styles.projectLink}
                    href={`/work/${item.relatedProject}`}
                  >
                    Related project{" "}
                    <ArrowUpRight aria-hidden="true" size={14} />
                  </Link>
                )}
              </div>
            </details>
          </li>
        );
      })}
    </ol>
  );
}

export default function JourneyPage() {
  return (
    <div className={styles.journeyPage}>
      <div className={styles.pageGrid} aria-hidden="true" />
      <div className={styles.content}>
        <Reveal className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span /> JOURNEY / FIELD NOTES
            </p>
            <h1>How I became the developer I am today.</h1>
            <p className={styles.heroIntro}>
              A personal timeline of what shaped my direction, what I am
              learning now, and what I want to grow into next.
            </p>
            <p className={styles.directionLine}>
              <span>CURRENT DIRECTION</span>
              {personal.direction}
            </p>
          </div>
          <div className={styles.heroAside} aria-hidden="true">
            <span className={styles.heroAsideLabel}>A PATH IN PROGRESS</span>
            <span className={styles.heroGlyph}>
              K<span>/</span>
            </span>
            <div className={styles.heroRoute}>
              <i />
              <i />
              <i />
              <i />
            </div>
            <span className={styles.heroAsideIndex}>
              CHAPTERS / {String(journeyTimeline.length).padStart(2, "0")}
            </span>
          </div>
          <a
            className={styles.scrollCue}
            href="#timeline"
            aria-label="Scroll to the journey timeline"
          >
            <ArrowDown aria-hidden="true" size={14} />
          </a>
        </Reveal>

        <Reveal className={styles.section} delay={0.03}>
          <section aria-labelledby="timeline-title">
            <SectionHeading
              id="timeline-title"
              index="01"
              eyebrow="CHAPTERS, IN CONTEXT"
              title="A path still being documented"
              description="Some dates and milestones are still missing from my profile. They are marked openly here instead of guessed; the timeline can grow as I add the details."
            />
            <div id="timeline" className={styles.timelineIntro}>
              <span className={styles.timelineIntroDot} />
              <p>Open a chapter to see its current notes.</p>
              <span className={styles.timelineLegend}>
                <span className={styles.legendCurrent} /> Current
                <span className={styles.legendPending} /> Details to add
                <span className={styles.legendUpcoming} /> Future direction
              </span>
            </div>
            <JourneyTimeline />
          </section>
        </Reveal>

        <Reveal
          className={`${styles.section} ${styles.lastSection}`}
          delay={0.02}
        >
          <section className={styles.nextChapter} aria-labelledby="next-title">
            <div className={styles.nextIcon} aria-hidden="true">
              <ArrowRight size={18} />
            </div>
            <div className={styles.nextCopy}>
              <p className={styles.eyebrow}>THE NEXT CHAPTER</p>
              <h2 id="next-title">Keep learning. Keep building.</h2>
              <p>
                The direction is clear, even while the details are still taking
                shape: strengthen the foundations and make useful things along
                the way.
              </p>
            </div>
            <ButtonLink href="/about" variant="secondary">
              Back to About <ArrowUpRight aria-hidden="true" size={15} />
            </ButtonLink>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
