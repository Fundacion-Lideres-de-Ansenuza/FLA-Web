"use client";

import { JSX } from "react";
import { useTranslation } from "react-i18next";
import FlaMomentsSlider, { type FlaMomentSlide } from "./FlaMomentsSlider";

function EnjoyFla(): JSX.Element {
  const { t } = useTranslation();
  const slides: FlaMomentSlide[] = [
    { src: "/images/DSC_0044.webp", alt: t("aboutUs.enjoyFla.imageAlt1"), eyebrow: t("aboutUs.enjoyFla.community"), title: t("aboutUs.enjoyFla.meetings") },
    { src: "/images/IMG_0621-min.webp", alt: t("aboutUs.enjoyFla.imageAlt2"), eyebrow: t("aboutUs.enjoyFla.team"), title: t("aboutUs.enjoyFla.moments") },
    { src: "/images/IMG_0745-min.webp", alt: t("aboutUs.enjoyFla.imageAlt3"), eyebrow: "FLA", title: t("aboutUs.enjoyFla.memories") },
    { src: "/images/about_us/PrimeraGrandeFla.webp", alt: t("aboutUs.enjoyFla.imageAlt4"), eyebrow: t("aboutUs.enjoyFla.impact"), title: t("aboutUs.enjoyFla.people") },
  ];

  return (
    <FlaMomentsSlider
      badge={t("aboutUs.enjoyFla.badge")}
      title={t("aboutUs.enjoyFla.title")}
      subtitle={t("aboutUs.enjoyFla.subtitle")}
      slides={slides}
    />
  );
}

export default EnjoyFla;
