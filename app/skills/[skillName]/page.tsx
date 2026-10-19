import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Check,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";
import {
  skillCategoryStages,
  skillGroups,
  skillProficiency,
  skillStages,
  skillUseCases,
} from "@/data/skills";
import styles from "./skill-detail.module.css";

const categoryDetails: Record<
  string,
  {
    heading: string;
    description: string;
    focus: string;
    capabilities: string[];
    codeTitle: string;
    code: string;
  }
> = {
  Frontend: {
    heading: "Frontend Development",
    description:
      "I build modern, responsive interfaces with a focus on clear layouts, reusable components, accessibility, and thoughtful interactions.",
    focus: "UI/UX + Performance",
    capabilities: [
      "Build responsive, accessible user interfaces",
      "Create reusable component-based layouts",
      "Add smooth interactions and transitions",
      "Optimize pages for performance and SEO",
      "Turn designs into maintainable code",
    ],
    codeTitle: "React component",
    code: `export default function Hero() {\n  return (\n    <section className=\"hero\">\n      <h1>Build. Create. Improve.</h1>\n      <p>Interfaces made for people.</p>\n    </section>\n  );\n}`,
  },
  Backend: {
    heading: "Backend Development",
    description:
      "I build application services and APIs that connect user interfaces to data, with a focus on clear structure, reliability, and secure access.",
    focus: "APIs + Reliability",
    capabilities: [
      "Design clear REST API endpoints",
      "Build server-side application logic",
      "Connect services to persistent data",
      "Handle identity and access safely",
      "Organize routes and middleware",
    ],
    codeTitle: "Express route",
    code: `app.get(\"/api/skills\", async (_req, res) => {\n  const skills = await getSkills();\n  res.json({ skills });\n});`,
  },
  Database: {
    heading: "Database",
    description:
      "I work with document and relational data models, choosing clear structures that make application data easier to store, query, and maintain.",
    focus: "Data + Modeling",
    capabilities: [
      "Shape data around application needs",
      "Query document-based collections",
      "Work with relational records and SQL",
      "Keep data access predictable",
      "Connect database operations to APIs",
    ],
    codeTitle: "Data query",
    code: `const records = await collection\n  .find({ active: true })\n  .sort({ updatedAt: -1 })\n  .toArray();`,
  },
  AI: {
    heading: "AI & Machine Learning",
    description:
      "I’m exploring AI APIs, language-model concepts, and practical automation to understand where intelligent features can help real products.",
    focus: "AI + Automation",
    capabilities: [
      "Connect applications to AI APIs",
      "Explore language-model capabilities",
      "Use prompts with clear goals and context",
      "Prototype useful AI-powered features",
      "Automate repeatable development tasks",
    ],
    codeTitle: "AI integration",
    code: `const response = await model.generate({\n  prompt: \"Summarize this note\",\n  context: note.content,\n});`,
  },
  Tools: {
    heading: "Tools & DevOps",
    description:
      "I use development and collaboration tools to manage changes, test APIs, and keep project workflows organized from idea to delivery.",
    focus: "Workflow + Delivery",
    capabilities: [
      "Track changes with Git",
      "Collaborate through GitHub",
      "Inspect and test APIs with Postman",
      "Work efficiently in VS Code",
      "Keep project workflows repeatable",
    ],
    codeTitle: "Git workflow",
    code: `git status\ngit add .\ngit commit -m \"Build feature\"\ngit push`,
  },
  Cloud: {
    heading: "Cloud & Deployment",
    description:
      "I’m learning how cloud platforms and deployment workflows take applications from local development to dependable production environments.",
    focus: "Cloud + Release",
    capabilities: [
      "Understand cloud hosting fundamentals",
      "Prepare applications for deployment",
      "Learn production release workflows",
      "Explore runtime and environment settings",
      "Improve how projects are shipped",
    ],
    codeTitle: "Deployment checklist",
    code: `const release = {\n  build: \"verified\",\n  environment: \"configured\",\n  deploy: \"ready\",\n};`,
  },
};

function getStageForSkill(skill: string) {
  const stage = skillStages.find((group) =>
    group.skills.some(
      (item) => item === skill || item.startsWith(`${skill} `),
    ),
  );
  return stage?.title ?? "Known";
}

export function generateStaticParams() {
  return skillGroups.map((group) => ({
    skillName: group.name.toLowerCase(),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ skillName: string }>;
}): Promise<Metadata> {
  const { skillName } = await params;
  const group = skillGroups.find(
    (item) => item.name.toLowerCase() === skillName.toLowerCase(),
  );
  const details = group ? categoryDetails[group.name] : undefined;

  return {
    title: details?.heading ?? "Skill details",
    description:
      details?.description ??
      "Explore technologies, focus areas, and practical skills.",
  };
}

export default async function SkillDetailPage({
  params,
}: {
  params: Promise<{ skillName: string }>;
}) {
  const { skillName } = await params;
  const group = skillGroups.find(
    (item) => item.name.toLowerCase() === skillName.toLowerCase(),
  );

  if (!group) notFound();

  const details = categoryDetails[group.name];
  const relatedGroups = skillGroups
    .filter((item) => item.name !== group.name)
    .slice(0, 3);

  return (
    <div className={styles.detailPage}>
      <div className={styles.pageGlow} aria-hidden="true" />
      <div className={styles.content}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true">›</span>
          <Link href="/skills">Skills</Link>
          <span aria-hidden="true">›</span>
          <span aria-current="page">{group.name}</span>
        </nav>

        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <span className={styles.categoryPill}>
              <Code2 size={13} aria-hidden="true" />
              {group.name === "AI" ? "AI & Machine Learning" : group.name}
            </span>
            <h1>
              {details.heading.split(" ").slice(0, -1).join(" ")}{" "}
              <span>{details.heading.split(" ").at(-1)}</span>
            </h1>
            <p className={styles.description}>{details.description}</p>

            <div className={styles.technologyTags}>
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>

          <div className={styles.codePanel} aria-label={details.codeTitle}>
            <div className={styles.codeHeader}>
              <div className={styles.windowDots} aria-hidden="true">
                <i />
                <i />
                <i />
              </div>
              <span>{details.codeTitle}</span>
              <Code2 size={14} aria-hidden="true" />
            </div>
            <pre>
              <code>{details.code}</code>
            </pre>
            <div className={styles.codeGlow} aria-hidden="true" />
          </div>
        </section>

        <section className={styles.summaryGrid} aria-label="Category summary">
          <article className={styles.summaryCard}>
            <span className={styles.summaryIcon}><Layers3 size={18} /></span>
            <span className={styles.summaryLabel}>Technologies</span>
            <strong>{group.skills.length}+</strong>
            <small>In this skill area</small>
          </article>
          <article className={styles.summaryCard}>
            <span className={styles.summaryIcon}><Sparkles size={18} /></span>
            <span className={styles.summaryLabel}>Skill level</span>
            <strong className={styles.stageValue}>
              {skillCategoryStages[group.name] ?? "Known"}
            </strong>
            <small>Current learning stage</small>
          </article>
          <article className={styles.summaryCard}>
            <span className={styles.summaryIcon}><Code2 size={18} /></span>
            <span className={styles.summaryLabel}>Focus area</span>
            <strong className={styles.focusValue}>{details.focus}</strong>
            <small>What I’m working on</small>
          </article>
          <article className={styles.summaryCard}>
            <span className={styles.summaryIcon}><ArrowRight size={18} /></span>
            <span className={styles.summaryLabel}>Learning next</span>
            <strong className={styles.focusValue}>{group.skills.at(-1)}</strong>
            <small>Growing through practice</small>
          </article>
        </section>

        <section className={styles.detailGrid}>
          <div className={styles.technologiesSection}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>TECHNOLOGIES & TOOLS</p>
                <h2>What I work with</h2>
              </div>
              <Link href="/skills" className={styles.viewAll}>
                All skills <ArrowUpRight size={15} />
              </Link>
            </div>

            <div className={styles.technologyGrid}>
              {group.skills.map((skill) => {
                const level = skillProficiency[skill] ?? 60;
                return (
                  <article className={styles.technologyCard} key={skill}>
                    <div className={styles.technologyHeading}>
                      <div className={styles.technologyIcon}><Code2 size={17} /></div>
                      <span className={styles.technologyStage} data-stage={getStageForSkill(skill)}>
                        {getStageForSkill(skill)}
                      </span>
                    </div>
                    <h3>{skill}</h3>
                    <p>{skillUseCases[skill] ?? "A tool I’m actively exploring."}</p>
                    <div
                      className={styles.progressTrack}
                      role="meter"
                      aria-label={`${skill} familiarity`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={level}
                    >
                      <span style={{ width: `${level}%` }} />
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <aside className={styles.capabilitiesPanel}>
            <div className={styles.sectionHeading}>
              <div>
                <p className={styles.eyebrow}>PRACTICAL FOCUS</p>
                <h2>What I can do</h2>
              </div>
            </div>
            <ul>
              {details.capabilities.map((capability) => (
                <li key={capability}>
                  <span><Check size={13} /></span>
                  {capability}
                </li>
              ))}
            </ul>
            <Link href="/work" className={styles.projectsLink}>
              Explore my projects <ArrowRight size={15} />
            </Link>
          </aside>
        </section>

        <section className={styles.examplesSection}>
          <div className={styles.sectionHeading}>
            <div>
              <p className={styles.eyebrow}>LEARNING BY BUILDING</p>
              <h2>Code in practice</h2>
            </div>
            <Link href="/work" className={styles.viewAll}>
              Explore work <ArrowUpRight size={15} />
            </Link>
          </div>
          <div className={styles.exampleCard}>
            <div className={styles.exampleTitle}>
              <Code2 size={16} />
              <span>{details.codeTitle}</span>
            </div>
            <pre><code>{details.code}</code></pre>
          </div>
        </section>

        <section className={styles.relatedSection}>
          <div className={styles.relatedLead}>
            <p className={styles.eyebrow}>KEEP EXPLORING</p>
            <h2>More skills to discover</h2>
          </div>
          <div className={styles.relatedLinks}>
            {relatedGroups.map((related) => (
              <Link
                className={styles.relatedLink}
                key={related.name}
                href={`/skills/${related.name.toLowerCase()}`}
              >
                <span>{related.name === "AI" ? "AI & Machine Learning" : related.name}</span>
                <ArrowUpRight size={16} />
              </Link>
            ))}
            <Link className={styles.backToSkills} href="/skills">
              <ArrowLeft size={15} /> Back to all skills
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
