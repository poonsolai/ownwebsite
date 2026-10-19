"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { personal } from "@/data/personal";
import { navigationItems } from "@/data/navigation";
import { useTranslations } from "@/hooks/useTranslations";

export function Footer() {
  const t = useTranslations();

  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link href="/" className="brand-lockup" aria-label={t("homeLinkLabel")}>
          <span className="brand-mark brand-mark-small">{personal.mark}</span>
          <span>
            <span className="brand-name">{t("brandFieldNotes")}</span>
            <span className="brand-caption">{t("brandSystems")}</span>
          </span>
        </Link>
        <p className="footer-thought">{t("footerThought")}</p>
        <nav aria-label={t("footerNavigation")} className="footer-shortcuts">
          {navigationItems
            .filter(({ href }) =>
              ["/about", "/work", "/notes", "/contact"].includes(href),
            )
            .map(({ href, translationKey }) => (
              <Link key={href} href={href}>
                {t(translationKey)}
              </Link>
            ))}
        </nav>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {personal.name}
        </span>
        <span>{t("footerMadeWith")}</span>
        {personal.socialLinks.map(({ label, href }) => (
          <a key={label} href={href} target="_blank" rel="noreferrer">
            {label} <ArrowUpRight aria-hidden="true" size={12} />
          </a>
        ))}
      </div>
    </footer>
  );
}
