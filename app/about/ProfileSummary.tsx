import Link from "next/link";
import { ArrowRight, ArrowUpRight, Download, Mail } from "lucide-react";
import { personal } from "@/data/personal";
import styles from "./profile-summary.module.css";

export function ProfileSummary() {
  return (
    <div className={styles.profileSummary}>
      <p className={styles.shortBio}>
        I&apos;m {personal.name}, a {personal.role.toLowerCase()} learning by
        building useful, thoughtful web experiences. I work with{" "}
        {personal.technologies.join(", ")} and keep exploring what I can make
        next.
      </p>
      <div className={styles.profileActions}>
        <Link
          className={styles.resumeButton}
          href="/poonso_resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Download size={15} aria-hidden="true" />
          View resume (PDF)
          <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
        <Link className={styles.workLink} href="/work">
          Explore my work <ArrowRight size={14} aria-hidden="true" />
        </Link>
        <Link className={styles.contactLink} href="/contact">
          <Mail size={14} aria-hidden="true" />
          Get in touch
        </Link>
      </div>
    </div>
  );
}
