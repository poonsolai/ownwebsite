"use client";

import { ArrowDownRight } from "lucide-react";
import { LanguageSwitcher } from "@/components/navigation/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/navigation/ThemeSwitcher";
import { useTranslations } from "@/hooks/useTranslations";

export function TopNavbar() {
  const t = useTranslations();

  return (
    <header className="top-navbar">
      <div className="top-context">
        <span className="top-context-index">K—01</span>
        <span className="top-context-label">{t("topContext")}</span>
        <ArrowDownRight
          aria-hidden="true"
          size={14}
          // className="text-[var(--muted)]"
        />
      </div>
      <div className="top-utilities">
        <ThemeSwitcher />
        <span className="utility-divider" />
        <LanguageSwitcher />
      </div>
    </header>
  );
}
