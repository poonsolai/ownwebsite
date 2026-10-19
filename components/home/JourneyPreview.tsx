"use client";

import Link from "next/link";
import { ArrowUpRight, Circle, CornerDownRight } from "lucide-react";
import { journeyMilestones } from "@/data/journey";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslations } from "@/hooks/useTranslations";

export function JourneyPreview() {
  const t = useTranslations();

  return (
    <Reveal className="home-section">
      <section aria-labelledby="journey-title">
        <SectionHeading
          id="journey-title"
          index="05"
          eyebrow={t("journeyEyebrow")}
          title={t("journeyTitle")}
          description={t("journeyDescription")}
        />
        {journeyMilestones.length ? (
          <div className="journey-list">
            {journeyMilestones.slice(0, 4).map((item) => (
              <article className="journey-item" key={item.title}>
                <div className={`journey-marker journey-marker-${item.status}`}>
                  <Circle size={9} fill="currentColor" />
                </div>
                <div className="journey-item-copy">
                  <span>{item.date ?? t("milestone")}</span>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
                <CornerDownRight aria-hidden="true" size={16} />
              </article>
            ))}
          </div>
        ) : (
          <div className="journey-empty">
            <div className="journey-empty-rail" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div>
              <span className="micro-label">{t("journeyEmptyLabel")}</span>
              <h3>{t("journeyEmptyTitle")}</h3>
              <p>{t("journeyEmptyDescription")}</p>
            </div>
            <span className="journey-empty-index">00—</span>
          </div>
        )}
        <Link className="text-link section-tail-link" href="/journey">
          {t("viewJourney")} <ArrowUpRight size={14} />
        </Link>
      </section>
    </Reveal>
  );
}
