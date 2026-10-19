import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import styles from "./case-study.module.css";

type Params = {
  slug: string;
};

type Props = {
  params: Promise<Params>;
};

export const dynamicParams = false;

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await Promise.resolve(params);
  const project = projects.find((item) => item.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: "Project not found",
      description: "The requested project could not be found.",
    };
  }

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.name,
      description: project.description,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: Props) {
  const resolvedParams = await Promise.resolve(params);
  const project = projects.find((item) => item.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(projectIndex + 1) % projects.length];

  return (
    <div className={styles.caseStudyPage}>
      <div className={styles.pageGrid} aria-hidden="true" />
      <div className={styles.content}>
        <header className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span /> PROJECT / {project.category.toUpperCase()}
            </p>
            <h1>{project.name}</h1>
            <p className={styles.heroIntro}>{project.description}</p>
            <div className={styles.heroMeta}>
              <span>{project.status}</span>
              <span>{project.technologies.join(" · ")}</span>
            </div>
          </div>
          <div className={styles.heroPanel}>
            {project.image && (
              <Image
                src={project.image}
                alt={`${project.name} project screenshot`}
                fill
                priority
                sizes="(max-width: 980px) 100vw, 230px"
              />
            )}
            <span>{project.projectType}</span>
          </div>
        </header>

        <div className={styles.layout}>
          {project.overview && project.overview !== project.description && (
            <section className={styles.section}>
              <h2>Overview</h2>
              <p>{project.overview}</p>
            </section>
          )}

          <section className={styles.section}>
            <h2>Tech stack</h2>
            <div className={styles.tagRow}>
              {project.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>
          </section>

          {project.problem && (
            <section className={styles.section}>
              <h2>Problem</h2>
              <p>{project.problem}</p>
            </section>
          )}

          {project.solution && (
            <section className={styles.section}>
              <h2>Solution</h2>
              <p>{project.solution}</p>
            </section>
          )}

          {project.features && project.features.length > 0 && (
            <section className={styles.section}>
              <h2>Features</h2>
              <ul>
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {project.architecture && project.architecture.length > 0 && (
            <section className={styles.section}>
              <h2>Architecture</h2>
              <ul>
                {project.architecture.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {project.challenges && project.challenges.length > 0 && (
            <section className={styles.section}>
              <h2>Challenges</h2>
              <ul>
                {project.challenges.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {project.whatILearned && project.whatILearned.length > 0 && (
            <section className={styles.section}>
              <h2>What I learned</h2>
              <ul>
                {project.whatILearned.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <section className={styles.section}>
              <h2>Screenshots</h2>
              <div className={styles.gallery}>
                {project.screenshots.map((item) => (
                  <div className={styles.galleryItem} key={item}>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          <section className={styles.section}>
            <h2>Project links</h2>
            <div className={styles.links}>
              {project.demoUrl && (
                <a href={project.demoUrl} target="_blank" rel="noreferrer">
                  Live demo <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              )}
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  Frontend source <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              )}
              {project.backendGithubUrl && (
                <a href={project.backendGithubUrl} target="_blank" rel="noopener noreferrer">
                  Backend source <ArrowUpRight aria-hidden="true" size={15} />
                </a>
              )}
              {!project.demoUrl && !project.githubUrl && !project.backendGithubUrl && (
                <p>Project links will be added when they are available.</p>
              )}
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link className={styles.backLink} href="/work">
            <ArrowLeft aria-hidden="true" size={15} />
            Back to projects
          </Link>
          {nextProject && nextProject.slug !== project.slug && (
            <Link className={styles.nextLink} href={`/work/${nextProject.slug}`}>
              Next project <ArrowRight aria-hidden="true" size={15} />
            </Link>
          )}
        </footer>
      </div>
    </div>
  );
}
