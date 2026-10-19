"use client";

import { useMemo, useState } from "react";
import { NotebookPen, Search } from "lucide-react";
import type { Note } from "@/data/notes";
import styles from "./notes.module.css";

type NoteSort = "newest" | "oldest" | "title";

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "short",
  day: "numeric",
  timeZone: "UTC",
});

export function NotesArchive({ notes }: { notes: Note[] }) {
  const [activeCategory, setActiveCategory] = useState("All topics");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState<NoteSort>("newest");

  const categories = useMemo(
    () => [...new Set(notes.map((note) => note.category))].sort((a, b) => a.localeCompare(b)),
    [notes],
  );

  const visibleNotes = useMemo(() => {
    const query = searchQuery.trim().toLocaleLowerCase();

    return notes
      .filter((note) => {
        const matchesCategory =
          activeCategory === "All topics" || note.category === activeCategory;
        const searchableText = [
          note.title,
          note.description,
          note.category,
          ...note.tags,
        ]
          .join(" ")
          .toLocaleLowerCase();

        return matchesCategory && (!query || searchableText.includes(query));
      })
      .sort((left, right) => {
        if (sortOrder === "title") {
          return left.title.localeCompare(right.title);
        }

        const dateOrder = left.date.localeCompare(right.date);
        return sortOrder === "newest" ? -dateOrder : dateOrder;
      });
  }, [activeCategory, notes, searchQuery, sortOrder]);

  function resetFilters() {
    setActiveCategory("All topics");
    setSearchQuery("");
    setSortOrder("newest");
  }

  return (
    <>
      <div className={styles.archiveControls}>
        <div className={styles.categoryFilters} role="group" aria-label="Filter notes by topic">
          <button
            type="button"
            className={activeCategory === "All topics" ? styles.categoryActive : styles.categoryButton}
            aria-pressed={activeCategory === "All topics"}
            onClick={() => setActiveCategory("All topics")}
          >
            All topics <span>{notes.length}</span>
          </button>
          {categories.map((category) => {
            const categoryCount = notes.filter((note) => note.category === category).length;

            return (
              <button
                key={category}
                type="button"
                className={
                  activeCategory === category
                    ? styles.categoryActive
                    : styles.categoryButton
                }
                aria-pressed={activeCategory === category}
                onClick={() => setActiveCategory(category)}
              >
                {category} <span>{categoryCount}</span>
              </button>
            );
          })}
        </div>
        <label className={styles.searchField}>
          <Search aria-hidden="true" size={15} />
          <span className="sr-only">Search notes</span>
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search titles, notes, or tags"
          />
        </label>
        <label className={styles.sortField}>
          <span className="sr-only">Sort notes</span>
          <select
            value={sortOrder}
            onChange={(event) => setSortOrder(event.target.value as NoteSort)}
          >
            <option value="newest">Newest first</option>
            <option value="oldest">Oldest first</option>
            <option value="title">Title: A to Z</option>
          </select>
        </label>
      </div>

      <p className={styles.resultsCount} aria-live="polite">
        Showing {visibleNotes.length} of {notes.length} notes
      </p>

      {visibleNotes.length > 0 ? (
        <div className={styles.grid}>
          {visibleNotes.map((note) => (
            <article className={styles.card} key={note.title}>
              <div className={styles.cardMeta}>
                <span>{note.category}</span>
                <time dateTime={note.date}>
                  {dateFormatter.format(new Date(`${note.date}T00:00:00Z`))}
                </time>
              </div>
              <h3>{note.title}</h3>
              <p>{note.description}</p>
              <div className={styles.tags}>
                {note.tags.map((tag) => (
                  <span key={`${note.title}-${tag}`}>{tag}</span>
                ))}
              </div>
              <div className={styles.cardFooter}>
                <span>{note.readingTime}</span>
                <NotebookPen aria-hidden="true" size={15} />
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className={styles.emptyResults} role="status">
          <h3>No notes match those filters.</h3>
          <p>Try a different search term or choose another topic.</p>
          <button type="button" onClick={resetFilters}>
            Clear filters
          </button>
        </div>
      )}
    </>
  );
}
