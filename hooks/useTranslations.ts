"use client";

import { translate } from "@/data/translations";
import { useLanguage } from "@/hooks/useLanguage";
import type { MessageKey } from "@/data/translations";

export function useTranslations() {
  const { locale } = useLanguage();
  return (key: MessageKey) => translate(locale, key);
}