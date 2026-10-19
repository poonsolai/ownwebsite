"use client";

import Link from "next/link";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowUpRight,
  BriefcaseBusiness,
  Code2,
} from "lucide-react";
import { personal } from "@/data/personal";
import { Badge } from "@/components/ui/Badge";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslations } from "@/hooks/useTranslations";

export function Hero() {
  const t = useTranslations();

  return (
    <Reveal className="hero-wrap">
      <section className="hero-section" aria-labelledby="hero-title">
        <div className="hero-grid-texture" aria-hidden="true" />
        <div className="hero-copy">
          <div className="hero-status-line">
            <Badge tone="lime">
              <span className="status-dot" /> {t("heroStatus")}
            </Badge>
            <span className="hero-coordinate">{t("visualOnlineField")}</span>
          </div>
          <p className="hero-eyebrow">{t("heroEyebrow")}</p>
          <h1 id="hero-title">
            {t("heroTitleFirst")}
            <br />
            <em>{t("heroTitleSecond")}</em>
          </h1>
          <p className="hero-intro">{t("heroIntro")}</p>
          <div className="hero-actions">
            <ButtonLink href="/work" className="hero-primary">
              {t("viewWork")} <ArrowUpRight aria-hidden="true" size={16} />
            </ButtonLink>
            <ButtonLink href="/journey" variant="secondary">
              {t("exploreJourney")} <ArrowDown aria-hidden="true" size={15} />
            </ButtonLink>
          </div>
          <div className="hero-socials">
            {personal.socialLinks.map(({ label, href }) => {
              const Icon = label === "GitHub" ? Code2 : BriefcaseBusiness;
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                >
                  <Icon aria-hidden="true" size={15} />
                  <span>{label}</span>
                  <ArrowUpRight aria-hidden="true" size={11} />
                </a>
              );
            })}
            <span className="hero-social-note">
              {personal.socialLinks.length > 0
                ? t("socialNote")
                : t("profilePending")}
            </span>
          </div>
        </div>

        <div className="hero-visual" role="img" aria-label={t("visualAria")}>
          <div className="hero-visual-top">
            <span>{t("visualField")}</span>
            <span>
              {t("visualInMotion")} <i />
            </span>
          </div>
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="hero-core" aria-hidden="true">
            <span>K</span>
          </div>
          <span className="hero-node hero-node-one" aria-hidden="true">
            <i />
          </span>
          <span className="hero-node hero-node-two" aria-hidden="true">
            <i />
          </span>
          <span className="hero-node hero-node-three" aria-hidden="true">
            <i />
          </span>
          <div className="hero-coordinate-label hero-coordinate-one">
            <span>01</span> {t("visualCuriosity")}
          </div>
          <div className="hero-coordinate-label hero-coordinate-two">
            <span>02</span> {t("visualSystems")}
          </div>
          <div className="hero-coordinate-label hero-coordinate-three">
            <span>03</span> {t("visualUseful")}
          </div>
          <div className="hero-visual-bottom">
            <span>
              {t("visualIdea")} <ArrowDownRight size={12} />{" "}
              {t("visualInterface")} <ArrowDownRight size={12} />{" "}
              {t("visualImpact")}
            </span>
            <span>{t("visualFigure")}</span>
          </div>
        </div>

        <Link className="hero-scroll" href="#about-preview">
          <span>{t("scrollExplore")}</span>
          <span className="hero-scroll-line" />
        </Link>
      </section>
    </Reveal>
  );
}
