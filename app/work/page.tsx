"use client";

import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpDown,
  ArrowUpRight,
  Filter,
  Search,
} from "lucide-react";
import { featuredProjects, projects } from "@/data/projects";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./work.module.css";

const filters = ["All", "Full Stack", "Frontend"] as const;
type ProjectFilter = (typeof filters)[number];
type ProjectSort = "featured" | "name-asc" | "name-desc";
const projectCategories = [...new Set(projects.map((project) => project.category))].sort(
  (left, right) => left.localeCompare(right),
);
const studioStats = [
  { label: "Featured work", value: String(featuredProjects.length).padStart(2, "0") },
  { label: "Disciplines", value: String(new Set(projects.map((project) => project.category)).size).padStart(2, "0") },
  { label: "Focus", value: "Product + UI" },
];
const principles = [
  "Design with real use cases in mind",
  "Keep architecture readable as it grows",
  "Turn experiments into useful product signals",
];

export default function WorkPage() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>("All");
  const [activeCategory, setActiveCategory] = useState("All categories");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<ProjectSort>("featured");

  const visibleProjects = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase();
    const matchingProjects = projects.filter((project) => {
      const matchesType = activeFilter === "All" || project.projectType === activeFilter;
      const matchesCategory =
        activeCategory === "All categories" || project.category === activeCategory;
      const searchableText = [
        project.name,
        project.description,
        project.category,
        project.projectType,
        ...project.technologies,
      ]
        .join(" ")
        .toLocaleLowerCase();

      return matchesType && matchesCategory && (!query || searchableText.includes(query));
    });

    return matchingProjects.sort((left, right) => {
      if (sortOrder === "featured" && left.featured !== right.featured) {
        return left.featured ? -1 : 1;
      }

      const nameOrder = left.name.localeCompare(right.name);
      return sortOrder === "name-desc" ? -nameOrder : nameOrder;
    });
  }, [activeCategory, activeFilter, searchQuery, sortOrder]);

  const resetProjectFilters = () => {
    setActiveFilter("All");
    setActiveCategory("All categories");
    setSearchQuery("");
    setSortOrder("featured");
  };

  return (
    <div className={styles.workPage}>
      <div className={styles.pageGrid} aria-hidden="true" />
      <div className={styles.content}>
        <Reveal className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span /> WORK / PORTFOLIO
            </p>
            <h1>Projects, experiments, and direction.</h1>
            <p className={styles.heroIntro}>
              A practical portfolio of product thinking, interface work, and experiments shaped by learning in public.
            </p>
          </div>
          <div className={styles.heroAside} aria-hidden="true">
            <span className={styles.heroAsideLabel}>SELECTED WORK</span>
            <span className={styles.heroGlyph}>W</span>
            <div className={styles.orbit}>
              <i />
              <i />
              <i />
            </div>
            <span className={styles.heroAsideIndex}>WORK / 01</span>
          </div>
          <a className={styles.scrollCue} href="#featured-projects" aria-label="Scroll to featured projects">
            <ArrowDown aria-hidden="true" size={14} />
          </a>
        </Reveal>

        <Reveal className={styles.section} delay={0.03}>
          <section aria-labelledby="work-stats-title">
            <SectionHeading
              id="work-stats-title"
              index="01"
              eyebrow="PORTFOLIO SIGNALS"
              title="A sharper snapshot of the work"
              description="The portfolio is structured like a living product: small, focused, and designed to keep growing with clarity."
            />
            <div className={styles.statsGrid}>
              {studioStats.map((stat) => (
                <div className={styles.statCard} key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
            <div className={styles.principlesGrid}>
              {principles.map((principle, index) => (
                <div className={styles.principleCard} key={principle}>
                  <span className={styles.principleIndex}>0{index + 1}</span>
                  <p>{principle}</p>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal className={styles.section} delay={0.03}>
          <section id="featured-projects" aria-labelledby="featured-title">
            <SectionHeading
              id="featured-title"
              index="02"
              eyebrow="FEATURED PROJECTS"
              title="The most relevant work"
              description="A small set of projects that best reflect the current direction and the patterns I am exploring."
            />
            <div className={styles.featuredGrid}>
              {featuredProjects.map((project) => (
                <article className={styles.featuredCard} key={project.slug}>
                  <div className={styles.visual}>
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={`${project.name} project screenshot`}
                        fill
                        sizes="(max-width: 980px) 100vw, 50vw"
                      />
                    )}
                    <span>{project.projectType}</span>
                    <strong>{project.name}</strong>
                  </div>
                  <div className={styles.cardBody}>
                    <div className={styles.cardTopline}>
                      <span className={styles.categoryTag}>{project.category}</span>
                      <span className={styles.status}>{project.status}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul className={styles.techList}>
                      {project.technologies.map((technology) => (
                        <li key={`${project.slug}-${technology}`}>{technology}</li>
                      ))}
                    </ul>
                    <div className={styles.cardActions}>
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          GitHub <ArrowUpRight aria-hidden="true" size={14} />
                        </a>
                      )}
                      {project.backendGithubUrl && (
                        <a href={project.backendGithubUrl} target="_blank" rel="noopener noreferrer">
                          Backend <ArrowUpRight aria-hidden="true" size={14} />
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Live demo <ArrowUpRight aria-hidden="true" size={14} />
                        </a>
                      )}
                      <Link href={`/work/${project.slug}`}>
                        Case study <ArrowRight aria-hidden="true" size={14} />
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <div className={styles.section}>
          <section aria-labelledby="all-projects-title">
            <SectionHeading
              id="all-projects-title"
              index="03"
              eyebrow="ALL PROJECTS"
              title="A broader archive"
              description="The collection continues to grow as I add more context, source, and case studies behind the work."
            />
            <div className={styles.filterBar}>
              <div className={styles.typeFilters} role="group" aria-label="Filter projects by type">
                <Filter aria-hidden="true" size={14} />
                {filters.map((filter) => (
                  <button
                    key={filter}
                    type="button"
                    className={filter === activeFilter ? styles.filterActive : styles.filterButton}
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={filter === activeFilter}
                  >
                    {filter}
                    <span className={styles.filterCount}>
                      {filter === "All"
                        ? projects.length
                        : projects.filter((project) => project.projectType === filter).length}
                    </span>
                  </button>
                ))}
              </div>
              <label className={styles.searchField}>
                <Search aria-hidden="true" size={15} />
                <span className="sr-only">Search projects</span>
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search projects or technologies"
                />
              </label>
              <label className={styles.selectField}>
                <span className="sr-only">Filter by category</span>
                <select
                  value={activeCategory}
                  onChange={(event) => setActiveCategory(event.target.value)}
                >
                  <option>All categories</option>
                  {projectCategories.map((category) => (
                    <option key={category}>{category}</option>
                  ))}
                </select>
              </label>
              <label className={styles.selectField}>
                <ArrowUpDown aria-hidden="true" size={14} />
                <span className="sr-only">Sort projects</span>
                <select
                  value={sortOrder}
                  onChange={(event) => setSortOrder(event.target.value as ProjectSort)}
                >
                  <option value="featured">Featured first</option>
                  <option value="name-asc">Name: A to Z</option>
                  <option value="name-desc">Name: Z to A</option>
                </select>
              </label>
            </div>
            <p className={styles.resultsCount} aria-live="polite">
              Showing {visibleProjects.length} of {projects.length} projects.
            </p>
            {visibleProjects.length > 0 ? (
              <div className={styles.projectGrid}>
                {visibleProjects.map((project) => (
                  <article className={styles.projectCard} key={project.slug}>
                  <div className={styles.projectThumb}>
                    {project.image && (
                      <Image
                        src={project.image}
                        alt={`${project.name} project screenshot`}
                        fill
                        sizes="(max-width: 980px) 100vw, 50vw"
                      />
                    )}
                    <span>{project.projectType}</span>
                    <strong>{project.name}</strong>
                  </div>
                  <div className={styles.projectDetails}>
                    <div className={styles.projectMeta}>
                      <span>{project.category}</span>
                      <span>{project.status}</span>
                    </div>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <ul>
                      {project.technologies.map((technology) => (
                        <li key={`${project.slug}-${technology}-mini`}>{technology}</li>
                      ))}
                    </ul>
                    <div className={styles.projectLinks}>
                      {project.githubUrl && (
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          GitHub
                        </a>
                      )}
                      {project.backendGithubUrl && (
                        <a href={project.backendGithubUrl} target="_blank" rel="noopener noreferrer">
                          Backend
                        </a>
                      )}
                      {project.demoUrl && (
                        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                          Live demo
                        </a>
                      )}
                      {!project.githubUrl && !project.demoUrl && (
                        <span>Project links coming soon</span>
                      )}
                      <Link href={`/work/${project.slug}`}>Case study</Link>
                    </div>
                  </div>
                  </article>
                ))}
              </div>
            ) : (
              <div className={styles.emptyResults} role="status">
                <h3>No projects match those filters.</h3>
                <p>Try another title, technology, or category.</p>
                <button type="button" onClick={resetProjectFilters}>
                  Clear filters
                </button>
              </div>
            )}
          </section>
        </div>
      </div>
    </div>
  );
}
