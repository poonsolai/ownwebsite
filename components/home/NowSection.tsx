"use client";

import Link from "next/link";
import { ArrowUpRight, CircleDot, MoveUpRight } from "lucide-react";
import { currentFocus } from "@/data/now";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslations } from "@/hooks/useTranslations";

export function NowSection() {
  const t = useTranslations();

  return (
    <Reveal className="home-section home-section-tight">
      <section aria-labelledby="now-title">
        <SectionHeading
          id="now-title"
          index="02"
          eyebrow={t("nowEyebrow")}
          title={t("nowTitle")}
          description={t("nowDescription")}
        />
        <article className="now-card">
          <div className="now-card-main">
            <div className="now-card-meta">
              <Badge tone="lime">
                <CircleDot size={11} /> {t("nowStatus")}
              </Badge>
              <span>{t("focusCode")}</span>
            </div>
            <h3>{t("nowProject")}</h3>
            <p>{t("nowBody")}</p>
            <div className="now-current-focus">
              <span>{t("nowFocusLabel")}</span>
              <span>{t("nowFocus")}</span>
            </div>
            <div className="inline-tags">
              {currentFocus.technologies.map((item) => (
                <Badge key={item}>{item}</Badge>
              ))}
            </div>
          </div>
          <div className="now-card-aside" aria-hidden="true">
            <div className="now-glyph">
              <span>K</span>
              <MoveUpRight size={26} />
            </div>
            <span className="now-aside-note">
              {t("nowAsideFirst")}
              <br />
              {t("nowAsideSecond")}
            </span>
          </div>
          <Link href="/now" className="now-card-link" aria-label={t("seeNow")}>
            <ArrowUpRight size={19} />
          </Link>
        </article>
        <Link className="text-link section-tail-link" href="/now">
          {t("seeNow")} <ArrowUpRight size={14} />
        </Link>
      </section>
    </Reveal>
  );
}
