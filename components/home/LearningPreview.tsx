"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Check,
  Compass,
  LoaderCircle,
  MoveRight,
} from "lucide-react";
import { learningTrack } from "@/data/learning";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useTranslations } from "@/hooks/useTranslations";

export function LearningPreview() {
  const t = useTranslations();
  const columns = [
    {
      title: t("currentlyLearning"),
      items: learningTrack.currentlyLearning,
      Icon: Compass,
      tone: "lime",
    },
    {
      title: t("inProgress"),
      items: learningTrack.inProgress.map(() => t("learningPortfolio")),
      Icon: LoaderCircle,
      tone: "blue",
    },
    {
      title: t("completed"),
      items: learningTrack.completed,
      Icon: Check,
      tone: "neutral",
    },
    {
      title: t("nextToLearn"),
      items: [t("learningAI"), t("learningCloud"), t("learningAdvanced")],
      Icon: MoveRight,
      tone: "coral",
    },
  ] as const;

  return (
    <Reveal className="home-section">
      <section aria-labelledby="learning-title">
        <SectionHeading
          id="learning-title"
          index="06"
          eyebrow={t("learningEyebrow")}
          title={t("learningTitle")}
          description={t("learningDescription")}
        />
        <div className="learning-grid">
          {columns.map(({ title, items, Icon, tone }) => (
            <div className={`learning-column learning-${tone}`} key={title}>
              <div className="learning-column-head">
                <Icon aria-hidden="true" size={15} />
                <h3>{title}</h3>
                <span>{String(items.length).padStart(2, "0")}</span>
              </div>
              {items.length ? (
                <ul>
                  {items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="learning-empty">{t("learningEmpty")}</p>
              )}
            </div>
          ))}
        </div>
        <Link className="text-link section-tail-link" href="/learning">
          {t("learningTrail")} <ArrowUpRight size={14} />
        </Link>
      </section>
    </Reveal>
  );
}
