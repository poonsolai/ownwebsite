"use client";

import { ChevronDown, Languages } from "lucide-react";
import { languageOptions } from "@/data/translations";
import { useLanguage } from "@/hooks/useLanguage";
import { useTranslations } from "@/hooks/useTranslations";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const t = useTranslations();

  return (
    <label className="language-control">
      <Languages aria-hidden="true" size={15} strokeWidth={1.8} />
      <span className="sr-only">{t("chooseLanguage")}</span>
      <select
        value={locale}
        onChange={(event) => setLocale(event.target.value as typeof locale)}
      >
        {languageOptions.map(({ code, name }) => (
          <option key={code} value={code}>
            {code} · {name}
          </option>
        ))}
      </select>
      <ChevronDown aria-hidden="true" className="language-chevron" size={13} />
    </label>
  );
}
