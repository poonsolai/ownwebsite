"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/useTranslations";

const themes = [
  { value: "dark", key: "themeDark", Icon: Moon },
  { value: "light", key: "themeLight", Icon: Sun },
  // { value: "system", key: "themeSystem", Icon: Monitor },
] as const;

export function ThemeSwitcher() {
  const { setTheme, theme } = useTheme();
  const t = useTranslations();
  const mounted = useSyncExternalStore(
    () => () => undefined,
    () => true,
    () => false,
  );

  return (
    <div className="utility-segment" role="group" aria-label={t("themeGroup")}>
      {themes.map(({ value, key, Icon }) => {
        const label = t(key);

        return (
          <button
            key={value}
            type="button"
            onClick={() => setTheme(value)}
            aria-label={label}
            aria-pressed={mounted && theme === value}
            title={label}
            className={cn(
              "utility-segment-button",
              mounted && theme === value && "utility-segment-active",
            )}
          >
            <Icon aria-hidden="true" size={15} strokeWidth={1.8} />
          </button>
        );
      })}
    </div>
  );
}
