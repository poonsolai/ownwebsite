import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Blocks,
  Bot,
  Braces,
  Cloud,
  Code2,
  Compass,
  Database,
  GitBranch,
  Lightbulb,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Image from "next/image";
import { personal } from "@/data/personal";
import { skillGroups } from "@/data/skills";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProfileSummary } from "./ProfileSummary";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About",
  description:
    "A closer look at what I am learning, building, and working toward.",
};

const identityPillars: Array<{
  icon: LucideIcon;
  label: string;
  title: string;
  description: string;
}> = [
  {
    icon: Code2,
    label: "01 / WEB",
    title: "Modern web, end to end",
    description:
      "Growing across the interface and the systems behind it, with a focus on building complete, considered web experiences.",
  },
  {
    icon: Bot,
    label: "02 / AI",
    title: "Useful AI, thoughtfully applied",
    description:
      "Exploring APIs, language models, and automation as practical parts of products, not features added for their own sake.",
  },
  {
    icon: Blocks,
    label: "03 / PRACTICE",
    title: "Learning through real builds",
    description:
      "Turning new concepts into working projects, then refining the details that make software clearer and more dependable.",
  },
];

const interestAreas: Array<{
  icon: LucideIcon;
  title: string;
  detail: string;
}> = [
  {
    icon: Code2,
    title: "Full-stack development",
    detail: "Interfaces through APIs",
  },
  {
    icon: Bot,
    title: "AI and automation",
    detail: "Useful workflows, made simpler",
  },
  { icon: Wrench, title: "Developer tools", detail: "Better ways to build" },
  { icon: Cloud, title: "Cloud", detail: "How applications get delivered" },
  {
    icon: Braces,
    title: "Modern UI/UX",
    detail: "Clear, responsive interactions",
  },
  {
    icon: Lightbulb,
    title: "Useful products",
    detail: "Software grounded in real needs",
  },
];

const directionSteps = [
  { title: "Learning", detail: "Build a strong base" },
  { title: "Building", detail: "Put ideas into practice" },
  { title: "Experimenting", detail: "Try, test, and understand" },
  { title: "Improving", detail: "Refine the work and the craft" },
];

const philosophy = [
  "Build projects alongside studying concepts.",
  "Keep fundamentals in view as tools change.",
  "Solve practical problems and learn from the result.",
  "Stay curious, then test ideas in code.",
];

function SkillOverview() {
  const overviewGroups = skillGroups.filter((group) =>
    ["Frontend", "Backend", "Database", "AI", "Tools"].includes(group.name),
  );
  const icons: Record<string, LucideIcon> = {
    Frontend: Code2,
    Backend: Braces,
    Database,
    AI: Bot,
    Tools: GitBranch,
  };

  return (
    <div className={styles.skillGrid}>
      {overviewGroups.map((group, index) => {
        const Icon = icons[group.name];
        return (
          <article className={styles.skillGroup} key={group.name}>
            <div className={styles.skillGroupHead}>
              <span className={styles.skillIcon}>
                <Icon aria-hidden="true" size={16} />
              </span>
              <span className={styles.microLabel}>0{index + 1}</span>
              <h3>{group.name}</h3>
            </div>
            <ul className={styles.skillList}>
              {group.skills
                .filter((skill) => skill !== "Authentication")
                .map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
            </ul>
          </article>
        );
      })}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className={styles.aboutPage}>
      <div className={styles.pageGrid} aria-hidden="true" />
      <div className={styles.content}>
        <Reveal className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span /> ABOUT ME / FIELD NOTES
            </p>
            <h1>{personal.headline}</h1>
            <ProfileSummary />
            <p className={styles.identityLine}>
              <span>MY DEVELOPER IDENTITY</span>
              {personal.direction}
            </p>
          </div>
          <div className={styles.heroAside}>
            <Image
              className={styles.profileImage}
              src="/images/profile.jpg"
              alt="Portrait of Poonsolai Karthick"
              width={462}
              height={593}
              priority
            />
            <span className={styles.imageBadge}>PROFILE / 01</span>
          </div>
          <a
            className={styles.scrollCue}
            href="#who-i-am"
            aria-label="Scroll to Who I Am"
          >
            <ArrowDown aria-hidden="true" size={14} />
          </a>
        </Reveal>

        <Reveal className={styles.section} delay={0.04}>
          <section aria-labelledby="who-title">
            <SectionHeading
              id="who-title"
              index="01"
              eyebrow="A CLOSER LOOK"
              title="Who I am"
              description="A work in progress, with a clear sense of what I want to understand and make next."
            />
            <div id="who-i-am" className={styles.profileGrid}>
              <div className={styles.profileLead}>
                <Compass aria-hidden="true" size={18} />
                <p>{personal.introduction}</p>
                <span className={styles.microLabel}>
                  CURRENTLY / {personal.role.toUpperCase()}
                </span>
              </div>
              <dl className={styles.profileFacts}>
                <div>
                  <dt>Current stage</dt>
                  <dd>{personal.education}</dd>
                </div>
                <div>
                  <dt>Developer identity</dt>
                  <dd>
                    {personal.role}, focused on thoughtful web experiences.
                  </dd>
                </div>
                <div>
                  <dt>Main interests</dt>
                  <dd>{personal.interests.join(" · ")}</dd>
                </div>
                <div>
                  <dt>Technology focus</dt>
                  <dd>{personal.technologies.join(" · ")}</dd>
                </div>
                <div>
                  <dt>Career direction</dt>
                  <dd>{personal.direction}</dd>
                </div>
              </dl>
            </div>
          </section>
        </Reveal>

        <Reveal className={styles.section} delay={0.03}>
          <section aria-labelledby="identity-title">
            <SectionHeading
              id="identity-title"
              index="02"
              eyebrow="THE KIND OF DEVELOPER"
              title="Building range, with purpose"
              description="The direction is full-stack and modern web development, with room to explore AI and the systems that make useful products work."
            />
            <div className={styles.identityGrid}>
              {identityPillars.map(
                ({ icon: Icon, label, title, description }) => (
                  <article className={styles.identityCard} key={label}>
                    <div className={styles.identityCardTop}>
                      <Icon aria-hidden="true" size={19} />
                      <span className={styles.microLabel}>{label}</span>
                    </div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                  </article>
                ),
              )}
            </div>
          </section>
        </Reveal>

        <Reveal className={styles.section} delay={0.02}>
          <section aria-labelledby="skills-title">
            <SectionHeading
              id="skills-title"
              index="03"
              eyebrow="TOOLS AND TECHNOLOGIES"
              title="What I know"
              description="A working overview of the technologies I am learning and using."
            />
            <SkillOverview />
            <Link className={styles.skillsLink} href="/skills">
              Explore My Skills <ArrowUpRight aria-hidden="true" size={15} />
            </Link>
          </section>
        </Reveal>

        <Reveal className={styles.section} delay={0.02}>
          <section aria-labelledby="interests-title">
            <SectionHeading
              id="interests-title"
              index="04"
              eyebrow="WHAT I FOLLOW"
              title="Things I keep coming back to"
              description="A few areas that shape the projects I want to try and the questions I ask while building."
            />
            <div className={styles.interestGrid}>
              {interestAreas.map(({ icon: Icon, title, detail }, index) => (
                <article className={styles.interestItem} key={title}>
                  <span className={styles.interestIndex}>0{index + 1}</span>
                  <Icon aria-hidden="true" size={17} />
                  <div>
                    <h3>{title}</h3>
                    <p>{detail}</p>
                  </div>
                  <ArrowUpRight
                    className={styles.interestArrow}
                    aria-hidden="true"
                    size={14}
                  />
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className={styles.section} delay={0.02}>
          <section aria-labelledby="direction-title">
            <SectionHeading
              id="direction-title"
              index="05"
              eyebrow="MY CURRENT DIRECTION"
              title="From curiosity to capability"
              description="A practical loop: learn enough to make something, use the process to find gaps, and keep improving."
            />
            <div className={styles.directionTrack}>
              {directionSteps.map((step, index) => (
                <div className={styles.directionStep} key={step.title}>
                  <span className={styles.directionNumber}>0{index + 1}</span>
                  <span className={styles.directionNode} />
                  <h3>{step.title}</h3>
                  <p>{step.detail}</p>
                  {index < directionSteps.length - 1 && (
                    <ArrowRight
                      className={styles.directionArrow}
                      aria-hidden="true"
                      size={15}
                    />
                  )}
                </div>
              ))}
              <div className={styles.directionDestination}>
                <span className={styles.microLabel}>AIMING TOWARD</span>
                <p>Becoming a strong software engineer</p>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal className={styles.section} delay={0.02}>
          <section
            className={styles.philosophySection}
            aria-labelledby="philosophy-title"
          >
            <div className={styles.philosophyIntro}>
              <p className={styles.eyebrow}>A PRACTICAL PHILOSOPHY</p>
              <h2 id="philosophy-title">Make the learning tangible.</h2>
              <p>
                Good progress comes from doing the work, noticing what is
                missing, and returning with better questions.
              </p>
            </div>
            <ul className={styles.philosophyList}>
              {philosophy.map((principle, index) => (
                <li key={principle}>
                  <span>0{index + 1}</span>
                  {principle}
                </li>
              ))}
            </ul>
          </section>
        </Reveal>

        <Reveal className={styles.section} delay={0.02}>
          <section
            className={styles.journeyPanel}
            aria-labelledby="journey-title"
          >
            <div>
              <p className={styles.eyebrow}>THE PATH SO FAR</p>
              <h2 id="journey-title">Want to see how I got here?</h2>
            </div>
            <ButtonLink href="/journey" variant="secondary">
              Explore My Journey <ArrowUpRight aria-hidden="true" size={15} />
            </ButtonLink>
          </section>
        </Reveal>

        <Reveal
          className={`${styles.section} ${styles.lastSection}`}
          delay={0.02}
        >
          <section
            className={styles.contactPanel}
            aria-labelledby="contact-title"
          >
            <div>
              <p className={styles.eyebrow}>OPEN TO GOOD IDEAS</p>
              <h2 id="contact-title">
                Let&apos;s connect.
                <br />
                <span>Let&apos;s build something useful.</span>
              </h2>
            </div>
            <div className={styles.contactActions}>
              <ButtonLink href="/contact" variant="primary">
                Contact Me <ArrowUpRight aria-hidden="true" size={15} />
              </ButtonLink>
              <ButtonLink href="/work" variant="secondary">
                View My Work <ArrowUpRight aria-hidden="true" size={15} />
              </ButtonLink>
            </div>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
