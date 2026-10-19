"use client";

import {
  createContext,
  useEffect,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { languageOptions, type Locale } from "@/data/translations";

type LanguageContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
};

export const LanguageContext = createContext<LanguageContextValue | null>(null);

const storageKey = "portfolio-language";
const listeners = new Set<() => void>();

function isLocale(value: string | null): value is Locale {
  return languageOptions.some((language) => language.code === value);
}

function getLocaleSnapshot(): Locale {
  const stored = window.localStorage.getItem(storageKey);
  return isLocale(stored) ? stored : "EN";
}

function subscribeToLocale(listener: () => void) {
  listeners.add(listener);
  const handleStorage = () => listener();
  window.addEventListener("storage", handleStorage);

  return () => {
    listeners.delete(listener);
    window.removeEventListener("storage", handleStorage);
  };
}

function getLanguageTag(locale: Locale) {
  return (
    languageOptions.find((language) => language.code === locale)?.htmlLang ??
    "en"
  );
}

export function setPortfolioLanguage(locale: Locale) {
  window.localStorage.setItem(storageKey, locale);
  document.documentElement.lang = getLanguageTag(locale);
  listeners.forEach((listener) => listener());
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(
    subscribeToLocale,
    getLocaleSnapshot,
    () => "EN" as Locale,
  );

  useEffect(() => {
    document.documentElement.lang = getLanguageTag(locale);
  }, [locale]);

  return (
    <LanguageContext.Provider
      value={{ locale, setLocale: setPortfolioLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  );
}
