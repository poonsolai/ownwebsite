"use client";

import Link from "next/link";
import { ArrowUpRight, Compass, GraduationCap, Sparkles } from "lucide-react";
import { personal } from "@/data/personal";
import { Badge } from "@/components/ui/Badge";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslations } from "@/hooks/useTranslations";

export function AboutPreview() {
  const t = useTranslations();
  const interests = [t("interestWeb"), t("interestAI"), t("interestCreative")];

  return (
    <Reveal className="home-section" delay={0.02}>
      <section id="about-preview" aria-labelledby="about-title">
        <SectionHeading
          id="about-title"
          index="01"
          eyebrow={t("aboutEyebrow")}
          title={t("aboutTitle")}
          description={t("aboutDescription")}
        />
        <div className="about-layout">
          <div className="about-statement">
            <span className="about-mark" aria-hidden="true">
              K<span>.</span>
            </span>
            <p>{t("aboutDirection")}</p>
            <Link className="text-link" href="/about">
              {t("exploreAbout")} <ArrowUpRight size={14} />
            </Link>
          </div>
          <div className="about-details">
            <div className="about-detail-row">
              <GraduationCap aria-hidden="true" size={17} />
              <span className="detail-label">{t("currentChapter")}</span>
              <span>{t("educationPending")}</span>
            </div>
            <div className="about-detail-row">
              <Sparkles aria-hidden="true" size={17} />
              <span className="detail-label">{t("technologiesUsing")}</span>
              <div className="inline-tags">
                {personal.technologies.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </div>
            <div className="about-detail-row">
              <Compass aria-hidden="true" size={17} />
              <span className="detail-label">{t("pullingMeIn")}</span>
              <div className="inline-tags">
                {interests.map((item) => (
                  <Badge key={item} tone="neutral">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Reveal>
  );
}
