import type { Metadata } from "next";
import { ArrowDown, ArrowRight, NotebookPen } from "lucide-react";
import { notes } from "@/data/notes";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NotesArchive } from "./NotesArchive";
import styles from "./notes.module.css";

export const metadata: Metadata = {
  title: "Notes",
  description: "Technical notes and practical references organized by topic and learning context.",
};

export default function NotesPage() {
  return (
    <div className={styles.notesPage}>
      <div className={styles.pageGrid} aria-hidden="true" />
      <div className={styles.content}>
        <Reveal className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>
              <span /> NOTES / REFERENCE
            </p>
            <h1>Small notes, organized for later use.</h1>
            <p className={styles.heroIntro}>
              A clean, lightweight place for technical notes that are useful enough to keep and specific enough to revisit.
            </p>
          </div>
          <div className={styles.heroAside} aria-hidden="true">
            <span className={styles.heroAsideLabel}>KNOWLEDGE BASE</span>
            <span className={styles.heroGlyph}>N</span>
            <div className={styles.orbit}>
              <i />
              <i />
              <i />
            </div>
            <span className={styles.heroAsideIndex}>NOTES / 01</span>
          </div>
          <a className={styles.scrollCue} href="#notes-list" aria-label="Scroll to notes list">
            <ArrowDown aria-hidden="true" size={14} />
          </a>
        </Reveal>

        <Reveal className={styles.section} delay={0.03}>
          <section id="notes-list" aria-labelledby="notes-list-title">
            <SectionHeading
              id="notes-list-title"
              index="01"
              eyebrow="NOTE ARCHIVE"
              title="Find a useful thread"
              description="Search the notes or filter by a topic that has actually been written about."
            />
            <NotesArchive notes={notes} />
          </section>
        </Reveal>

        <Reveal className={`${styles.section} ${styles.lastSection}`} delay={0.02}>
          <section className={styles.nextSection} aria-labelledby="notes-next-title">
            <div className={styles.nextIcon} aria-hidden="true">
              <NotebookPen size={18} />
            </div>
            <div className={styles.nextCopy}>
              <p className={styles.eyebrow}>NEXT</p>
              <h2 id="notes-next-title">Keep the knowledge loop active.</h2>
              <p>
                This structure is designed to grow as notes become more specific, more useful, and more reflective of the work itself.
              </p>
            </div>
            <ButtonLink href="/work" variant="secondary">
              View work <ArrowRight aria-hidden="true" size={15} />
            </ButtonLink>
          </section>
        </Reveal>
      </div>
    </div>
  );
}
