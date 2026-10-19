import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Braces,
  Code2,
  Layers3,
  Lightbulb,
  Rocket,
  Sparkles,
  Wrench,
} from "lucide-react";
import { skillGroups, skillStages } from "@/data/skills";
import styles from "./skills.module.css";
import { SkillsCatalog } from "./SkillsCatalog";

export const metadata: Metadata = {
  title: "Skills",
  description: "A practical overview of the technologies I use and the areas I am learning.",
};

const totalSkills = skillGroups.reduce(
  (total, group) => total + group.skills.length,
  0,
);
const learningCount =
  skillStages.find((stage) => stage.title === "Learning")?.skills.length ?? 0;

const learningSteps = [
  { icon: BookOpen, title: "Learn", text: "Understand the concepts" },
  { icon: Code2, title: "Practice", text: "Write real code" },
  { icon: Layers3, title: "Build", text: "Create useful projects" },
  { icon: Lightbulb, title: "Experiment", text: "Try new technologies" },
  { icon: Rocket, title: "Improve", text: "Make it better" },
];

export default function SkillsPage() {
  return (
    <div className={styles.skillsPage}>
      <div className={styles.content}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">/</span>
          <span aria-current="page">Skills</span>
        </nav>

        <section className={styles.heroSection} aria-labelledby="skills-title">
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><i /> MY TOOLKIT / FIELD NOTES</p>
            <h1 id="skills-title">
              Skills for building <span>what&apos;s next.</span>
            </h1>
            <p className={styles.heroDescription}>
              The technologies I use to turn ideas into working products — and
              the skills I&apos;m growing through hands-on projects.
            </p>

            <div className={styles.statRow}>
              <div className={styles.statTile}>
                <span>{skillGroups.length}</span>
                <small>Skill areas</small>
              </div>
              <div className={styles.statTile}>
                <span>{totalSkills}</span>
                <small>Technologies</small>
              </div>
              <div className={styles.statTile}>
                <span>{learningCount}</span>
                <small>Learning now</small>
              </div>
            </div>
            <a className={styles.scrollLink} href="#skill-catalog">
              Explore the toolkit <ArrowDown size={14} />
            </a>
          </div>

          <div className={styles.heroVisual} aria-label="A snapshot of my development toolkit">
            <div className={styles.visualWindow}>
              <div className={styles.windowBar}>
                <span className={styles.windowDots}><i /><i /><i /></span>
                <span>developer.ts</span>
                <Braces size={15} />
              </div>
              <pre><code>{`const developer = {\n  learn: true,\n  build: true,\n  create: true,\n  improve: true,\n};\n\n// keep shipping`}</code></pre>
            </div>
            <span className={`${styles.floatTag} ${styles.floatReact}`}>React</span>
            <span className={`${styles.floatTag} ${styles.floatTypescript}`}>TypeScript</span>
            <span className={`${styles.floatTag} ${styles.floatNode}`}>Node.js</span>
            <span className={`${styles.floatTag} ${styles.floatMongo}`}>MongoDB</span>
            <div className={styles.visualCaption}><Sparkles size={14} /> Learn it. Build it. Improve it.</div>
          </div>
        </section>

        <section className={styles.techSection} id="skill-catalog" aria-label="Skills catalogue">
          <SkillsCatalog />
        </section>

        <section className={styles.bottomRow} aria-label="Learning approach and skill counts">
          <div className={styles.learningPanel}>
            <div className={styles.panelHeading}>
              <span className={styles.panelIcon}><Sparkles size={16} /></span>
              <div>
                <p className={styles.sectionEyebrow}>MY APPROACH</p>
                <h2>Learning is a loop</h2>
              </div>
            </div>
            <div className={styles.learningFlow}>
              {learningSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div className={styles.stepItem} key={step.title}>
                    <span className={styles.stepNumber}>0{index + 1}</span>
                    <span className={styles.stepIcon}><Icon size={18} /></span>
                    <strong>{step.title}</strong>
                    <span className={styles.stepText}>{step.text}</span>
                    {index < learningSteps.length - 1 && (
                      <ArrowRight className={styles.stepArrow} size={15} aria-hidden="true" />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className={styles.statsPanel}>
            <div className={styles.panelHeading}>
              <span className={styles.panelIcon}><Wrench size={16} /></span>
              <div>
                <p className={styles.sectionEyebrow}>BY CATEGORY</p>
                <h2>Quick stats</h2>
              </div>
            </div>
            <ul className={styles.statsList}>
              {skillGroups.map((group) => (
                <li key={group.name}>
                  <span className={styles.dotSmall} />
                  <span>{group.name === "AI" ? "AI / ML" : group.name}</span>
                  <strong>{group.skills.length} skills</strong>
                </li>
              ))}
            </ul>
            <Link href="/learning" className={styles.learningLink}>
              Continue learning <ArrowUpRight size={14} />
            </Link>
          </div>
        </section>

        <section className={styles.bottomCta}>
          <span className={styles.ctaIcon}><Wrench size={19} /></span>
          <div>
            <p className={styles.sectionEyebrow}>PUTTING SKILLS TO WORK</p>
            <h2>Curiosity is better when you build something with it.</h2>
          </div>
          <Link href="/work" className={styles.ctaLink}>
            See my work <ArrowRight size={15} />
          </Link>
        </section>
      </div>
    </div>
  );
}
