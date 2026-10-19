"use client";

import Link from "next/link";
import { ArrowUpRight, Radio } from "lucide-react";
import { personal } from "@/data/personal";
import { NavLinks } from "@/components/navigation/NavLinks";
import { useTranslations } from "@/hooks/useTranslations";

export function Sidebar() {
  const t = useTranslations();

  return (
    <aside className="desktop-sidebar">
      <Link href="/" className="brand-lockup" aria-label={t("homeLinkLabel")}>
        <span className="brand-mark">{personal.mark}</span>
        <span className="min-w-0">
          <span className="brand-name">{t("brandFieldNotes")}</span>
          <span className="brand-caption">{t("brandSystems")}</span>
        </span>
      </Link>

      <div className="sidebar-scroll">
        <NavLinks />
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-status">
          <Radio aria-hidden="true" size={14} />
          <span>{t("livingProfile")}</span>
          <span className="status-dot" />
        </div>
        <Link href="/contact" className="sidebar-github">
          Contact <ArrowUpRight aria-hidden="true" size={13} />
        </Link>
      </div>
    </aside>
  );
}
