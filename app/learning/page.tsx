import type { Metadata } from "next";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Code2,
  Compass,
  Rocket,
  Sparkles,
} from "lucide-react";
import { learningTrack } from "@/data/learning";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./learning.module.css";

export const metadata: Metadata = {
  title: "Learning",
  description: "A current snapshot of what I am learning, improving, and planning next.",
};

const learningPhilosophy = ["Learn", "Practice", "Build", "Experiment", "Improve"];

const timeline = [
  {
    title: "Foundation",
    description: "Reinforce the fundamentals behind modern web development and good product thinking.",
  },
  {
    title: "Applied practice",
    description: "Turn theory into working interfaces, systems, and experiments.",
  },
  {
    title: "System thinking",
    description: "Connect architecture, tooling, and real use cases instead of isolated concepts.",
  },
  {
    title: "Continuous refinement",
    description: "Improve the quality of execution and the clarity of decisions over time.",
  },
];

export default function LearningPage() {
  return (
    <div className={styles.learningPage}>
      <div className={styles.pageGrid} aria-hidden="true" />
      <div className={styles.content}>
        <Reveal className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span /> LEARNING / FIELD NOTES
            </p>
            <h1>A learning path built by practice.</h1>
            <p className={styles.heroIntro}>
              I am building a system for understanding technology deeply enough to use it well, while staying open to the new things that shape modern product work.
            </p>
            <div className={styles.identityLine}>
              <span>LEARNING IDENTITY</span>
              Curious builder · Systems thinker · Practical learner
            </div>
          </div>
          <div className={styles.heroAside} aria-hidden="true">
            <span className={styles.heroAsideLabel}>CURRENT MINDSET</span>
            <span className={styles.heroGlyph}>L</span>
            <div className={styles.orbit}>
              <i />
              <i />
              <i />
            </div>
            <span className={styles.heroAsideIndex}>LEARN / 01</span>
          </div>
          <a className={styles.scrollCue} href="#learning-overview" aria-label="Scroll to learning overview">
            <ArrowDown aria-hidden="true" size={14} />
          </a>
        </Reveal>

        <Reveal className={styles.section} delay={0.03}>
          <section id="learning-overview" aria-labelledby="learning-overview-title">
            <SectionHeading
              id="learning-overview-title"
              index="01"
              eyebrow="CURRENTLY IN MOTION"
              title="What I am learning right now"
              description="The focus is practical and layered: modern frontend work, better product thinking, and a stronger understanding of how useful systems are built."
            />
            <div className={styles.learnGrid}>
              <article className={styles.panel}>
                <div className={styles.panelHead}>
                  <Code2 aria-hidden="true" size={18} />
                  <span className={styles.microLabel}>CURRENTLY LEARNING</span>
                </div>
                <ul className={styles.tagList}>
                  {learningTrack.currentlyLearning.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className={styles.panel}>
                <div className={styles.panelHead}>
                  <BookOpen aria-hidden="true" size={18} />
                  <span className={styles.microLabel}>COMPLETED</span>
                </div>
                <ul className={styles.tagList}>
                  {learningTrack.completed.length > 0 ? (
                    learningTrack.completed.map((item) => <li key={item}>{item}</li>)
                  ) : (
                    <li className={styles.emptyState}>Details to add.</li>
                  )}
                </ul>
              </article>
              <article className={styles.panel}>
                <div className={styles.panelHead}>
                  <Compass aria-hidden="true" size={18} />
                  <span className={styles.microLabel}>IN PROGRESS</span>
                </div>
                <ul className={styles.tagList}>
                  {learningTrack.inProgress.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
              <article className={styles.panel}>
                <div className={styles.panelHead}>
                  <Rocket aria-hidden="true" size={18} />
                  <span className={styles.microLabel}>NEXT TO LEARN</span>
                </div>
                <ul className={styles.tagList}>
                  {learningTrack.nextToLearn.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </section>
        </Reveal>

        <Reveal className={styles.section} delay={0.03}>
          <section aria-labelledby="learning-timeline-title">
            <SectionHeading
              id="learning-timeline-title"
              index="02"
              eyebrow="PROGRESSION"
              title="Learning timeline"
              description="A simple view of how the learning path is evolving from fundamentals to deeper product and system thinking."
            />
            <div className={styles.timeline}>
              {timeline.map((item, index) => (
                <article className={styles.timelineItem} key={item.title}>
                  <span className={styles.timelineIndex}>0{index + 1}</span>
                  <div className={styles.timelineBody}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className={styles.section} delay={0.02}>
          <section aria-labelledby="learning-philosophy-title">
            <SectionHeading
              id="learning-philosophy-title"
              index="03"
              eyebrow="PHILOSOPHY"
              title="How I learn"
              description="I try to keep the loop honest: understand, practice, build, test, and refine."
            />
            <div className={styles.philosophyBlock}>
              {learningPhilosophy.map((step, index) => (
                <div className={styles.philosophyStep} key={step}>
                  <span className={styles.stepIndex}>0{index + 1}</span>
                  <span className={styles.stepLabel}>{step}</span>
                  {index < learningPhilosophy.length - 1 && (
                    <ArrowRight className={styles.arrow} aria-hidden="true" size={16} />
                  )}
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className={`${styles.section} ${styles.lastSection}`} delay={0.02}>
          <section className={styles.nextSection} aria-labelledby="learning-next-title">
            <div className={styles.nextIcon} aria-hidden="true">
              <Sparkles size={18} />
            </div>
            <div className={styles.nextCopy}>
              <p className={styles.eyebrow}>NEXT STEP</p>
              <h2 id="learning-next-title">Keep learning in public.</h2>
              <p>
                I want the process to stay visible: a mix of fundamentals, experiments, and the things that become useful as they mature.
              </p>
            </div>
            <ButtonLink href="/skills" variant="secondary">
              See the toolkit <ArrowRight aria-hidden="true" size={15} />
            </ButtonLink>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
