"use client";

import { JSX } from "react";
import { useTranslation } from "react-i18next";
import FlaMomentsSlider, { type FlaMomentSlide } from "./FlaMomentsSlider";

const FLA_MOMENTS: FlaMomentSlide[] = [
  {
    src: "/images/DSC_0044.webp",
    alt: "Grupo en una actividad de FLA",
    eyebrow: "Comunidad",
    title: "Encuentros",
  },
  {
    src: "/images/IMG_0621-min.webp",
    alt: "Participantes compartiendo un momento",
    eyebrow: "Equipo",
    title: "Momentos",
  },
  {
    src: "/images/IMG_0745-min.webp",
    alt: "Escena espontanea de una actividad",
    eyebrow: "FLA",
    title: "Recuerdos",
  },
  {
    src: "/images/about_us/PrimeraGrandeFla.webp",
    alt: "Equipo FLA reunido",
    eyebrow: "Impacto",
    title: "Personas",
  },
];

function EnjoyFla(): JSX.Element {
  const { t } = useTranslation();

  return (
    <FlaMomentsSlider
      badge={t("aboutUs.enjoyFla.badge")}
      title={t("aboutUs.enjoyFla.title")}
      subtitle={t("aboutUs.enjoyFla.subtitle")}
      slides={FLA_MOMENTS}
    />
  );
}

export default EnjoyFla;
