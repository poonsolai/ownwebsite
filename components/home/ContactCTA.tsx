"use client";

import Link from "next/link";
import { ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { personal } from "@/data/personal";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslations } from "@/hooks/useTranslations";

export function ContactCTA() {
  const t = useTranslations();

  return (
    <Reveal className="home-section contact-section">
      <section className="contact-cta" aria-labelledby="contact-title">
        <div className="contact-kicker">
          <span className="status-dot" /> {t("contactKicker")}
        </div>
        <h2 id="contact-title">
          {t("contactTitleOne")}
          <br />
          <em>{t("contactTitleTwo")}</em>
        </h2>
        <div className="contact-bottom">
          <p>{t("contactDescription")}</p>
          <Link href="/contact" className="contact-button">
            {t("contactButton")} <ArrowRight aria-hidden="true" size={16} />
          </Link>
        </div>
        <div className="contact-links">
          {personal.email ? (
            <a href={`mailto:${personal.email}`}>
              <Mail size={14} />
              {personal.email}
              <ArrowUpRight size={12} />
            </a>
          ) : (
            <span className="contact-detail-pending">{t("emailPending")}</span>
          )}
          {personal.socialLinks.map(({ label, href }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer">
              {label}
              <ArrowUpRight size={12} />
            </a>
          ))}
        </div>
        <span className="contact-coordinate" aria-hidden="true">
          {t("chapterProgress")}
        </span>
      </section>
    </Reveal>
  );
}
