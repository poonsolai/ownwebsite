"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Activity,
  BookOpen,
  BriefcaseBusiness,
  FlaskConical,
  Focus,
  House,
  Layers3,
  NotebookPen,
  Route,
  Send,
  Signpost,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import { navigationItems } from "@/data/navigation";
import { cn } from "@/lib/utils";
import { useTranslations } from "@/hooks/useTranslations";

const icons: Record<string, LucideIcon> = {
  house: House,
  "user-round": UserRound,
  route: Route,
  "layers-3": Layers3,
  "book-open": BookOpen,
  focus: Focus,
  "briefcase-business": BriefcaseBusiness,
  "flask-conical": FlaskConical,
  "notebook-pen": NotebookPen,
  activity: Activity,
  signpost: Signpost,
  sparkles: Sparkles,
  send: Send,
};

const groups = ["Explore", "Workspace", "Connect"] as const;
const groupKeys = {
  Explore: "groupExplore",
  Workspace: "groupWorkspace",
  Connect: "groupConnect",
} as const;

type NavLinksProps = {
  onNavigate?: () => void;
};

export function NavLinks({ onNavigate }: NavLinksProps) {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <nav aria-label={t("mainNavigation")} className="space-y-6">
      {groups.map((group) => (
        <div key={group}>
          <p className="nav-group-label">{t(groupKeys[group])}</p>
          <div className="mt-2 space-y-1">
            {navigationItems
              .filter((item) => item.group === group)
              .map((item) => {
                const Icon = icons[item.icon];
                const active =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(`${item.href}/`));

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={onNavigate}
                    aria-current={active ? "page" : undefined}
                    className={cn("nav-link", active && "nav-link-active")}
                    title={t(item.translationKey)}
                  >
                    <Icon aria-hidden="true" size={16} strokeWidth={1.8} />
                    <span>{t(item.translationKey)}</span>
                    {active && (
                      <span className="nav-active-mark" aria-hidden="true" />
                    )}
                  </Link>
                );
              })}
          </div>
        </div>
      ))}
    </nav>
  );
}
