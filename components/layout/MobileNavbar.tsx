"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { personal } from "@/data/personal";
import { NavLinks } from "@/components/navigation/NavLinks";
import { useTranslations } from "@/hooks/useTranslations";

export function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const t = useTranslations();

  return (
    <div className="mobile-navigation">
      <div className="mobile-bar">
        <Link href="/" className="brand-lockup" aria-label={t("homeLinkLabel")}>
          <span className="brand-mark brand-mark-small">{personal.mark}</span>
          <span className="brand-name">{t("brandFieldNotes")}</span>
        </Link>
        <button
          type="button"
          className="icon-button"
          aria-label={open ? t("closeNavigation") : t("openNavigation")}
          aria-expanded={open}
          aria-controls="mobile-nav-panel"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </div>
      {open && (
        <div id="mobile-nav-panel" className="mobile-nav-panel">
          <NavLinks onNavigate={() => setOpen(false)} />
        </div>
      )}
    </div>
  );
}
