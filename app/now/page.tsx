import type { Metadata } from "next";
import { ArrowDown, ArrowRight, CircleDashed, Compass, Rocket, Sparkles } from "lucide-react";
import { goals } from "@/data/goals";
import { currentFocus } from "@/data/now";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./now.module.css";

export const metadata: Metadata = {
  title: "Now",
  description: "What I am building, learning, and exploring at the moment.",
};

const currentlyLearning = [
  "Next.js app architecture",
  "TypeScript patterns for maintainable UI",
  "Practical AI workflow design",
  "Cloud fundamentals and deployment thinking",
];

const experiments = [
  "Prompt-driven interfaces",
  "Lightweight utility prototypes",
  "Experimenting with UI systems and motion",
];

const nextSteps = [
  "Refine the portfolio structure and content system",
  "Develop a few stronger project case studies",
  "Turn experiments into practical and readable work",
];

export default function NowPage() {
  return (
    <div className={styles.nowPage}>
      <div className={styles.pageGrid} aria-hidden="true" />
      <div className={styles.content}>
        <Reveal className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span /> NOW / FIELD NOTES
            </p>
            <h1>What I am focused on right now.</h1>
            <p className={styles.heroIntro}>
              A snapshot of the work I am making, the things I am learning, and the areas I want to understand more deeply.
            </p>
            <p className={styles.currentTagline}>
              <span>CURRENT FOCUS</span>
              {currentFocus.focus}
            </p>
          </div>
          <div className={styles.heroAside} aria-hidden="true">
            <span className={styles.heroAsideLabel}>CURRENTLY BUILDING</span>
            <span className={styles.heroGlyph}>N</span>
            <div className={styles.orbit}>
              <i />
              <i />
              <i />
            </div>
            <span className={styles.heroAsideIndex}>NOW / 01</span>
          </div>
          <a className={styles.scrollCue} href="#now-overview" aria-label="Scroll to the current work overview">
            <ArrowDown aria-hidden="true" size={14} />
          </a>
        </Reveal>

        <Reveal className={styles.section} delay={0.03}>
          <section id="now-overview" aria-labelledby="now-overview-title">
            <SectionHeading
              id="now-overview-title"
              index="01"
              eyebrow="CURRENT STATUS"
              title="A focused snapshot"
              description="This is a work-in-progress view of what matters most at the moment. It stays human, practical, and intentionally temporary."
            />
            <div className={styles.focusCard}>
              <div className={styles.focusHeader}>
                <div>
                  <p className={styles.cardEyebrow}>CURRENTLY BUILDING</p>
                  <h3>{currentFocus.name}</h3>
                </div>
                <span className={styles.statusPill}>{currentFocus.status}</span>
              </div>
              <p className={styles.focusDescription}>{currentFocus.description}</p>
              <div className={styles.metaGrid}>
                <div>
                  <span>Current focus</span>
                  <strong>{currentFocus.focus}</strong>
                </div>
                <div>
                  <span>Technologies</span>
                  <strong>{currentFocus.technologies.join(" · ")}</strong>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal className={styles.section} delay={0.03}>
          <section aria-labelledby="now-lists-title">
            <SectionHeading
              id="now-lists-title"
              index="02"
              eyebrow="CURRENT VIEW"
              title="What I am learning, testing, and aiming for"
              description="These are the moving parts of the moment: active learning, personal experiments, and the goals behind the work."
            />
            <div className={styles.listGrid}>
              <article className={styles.listCard}>
                <div className={styles.listHeader}>
                  <Compass aria-hidden="true" size={18} />
                  <h3>Currently learning</h3>
                </div>
                <ul>
                  {currentlyLearning.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className={styles.listCard}>
                <div className={styles.listHeader}>
                  <Sparkles aria-hidden="true" size={18} />
                  <h3>Current experiments</h3>
                </div>
                <ul>
                  {experiments.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
              <article className={styles.listCard}>
                <div className={styles.listHeader}>
                  <CircleDashed aria-hidden="true" size={18} />
                  <h3>Goals</h3>
                </div>
                <ul className={styles.goalList}>
                  {goals.map((goal) => (
                    <li
                      className={styles.goalItem}
                      data-accent={goal.accent}
                      key={goal.title}
                    >
                      <div className={styles.goalHeading}>
                        <span className={styles.goalHorizon}>{goal.horizon}</span>
                        <strong>{goal.title}</strong>
                      </div>
                      <p>{goal.description}</p>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal className={styles.section} delay={0.02}>
          <section aria-labelledby="now-next-title">
            <SectionHeading
              id="now-next-title"
              index="03"
              eyebrow="NEXT STEPS"
              title="The immediate path"
              description="What matters next is not widening the scope but making the current direction sharper, more useful, and easier to sustain."
            />
            <div className={styles.nextSteps}>
              {nextSteps.map((step, index) => (
                <div className={styles.step} key={step}>
                  <span className={styles.stepIndex}>0{index + 1}</span>
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className={`${styles.section} ${styles.lastSection}`} delay={0.02}>
          <section className={styles.nextSection} aria-labelledby="now-next-label">
            <div className={styles.nextIcon} aria-hidden="true">
              <Rocket size={18} />
            </div>
            <div className={styles.nextCopy}>
              <p className={styles.eyebrow}>NEXT THING</p>
              <h2 id="now-next-label">Keep building, keep listening, keep iterating.</h2>
              <p>
                The work is shaped by momentum, curiosity, and a desire to build things with real value rather than noise.
              </p>
            </div>
            <ButtonLink href="/work" variant="secondary">
              See project work <ArrowRight aria-hidden="true" size={15} />
            </ButtonLink>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
