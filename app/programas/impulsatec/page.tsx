import type { Metadata } from "next";
import ImpulsatecPageClient from "./ImpulsatecPageClient";

export const metadata: Metadata = {
  title: "ImpulsaTEC - Programa de Capacitación Tecnológica para Jóvenes | FLA",
  description: "Programa educativo federal de capacitación y mentoría en tecnología para jóvenes del interior de Argentina. +500 participantes, alianza con EY GDS Argentina. Edición 2024.",
  keywords: [
    "capacitación tecnológica jóvenes",
    "impulsatec",
    "inteligencia artificial educación",
    "metodologías ágiles",
    "ux diseño",
    "mentoría tecnológica",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "ImpulsaTEC - Capacitación Tecnológica para Jóvenes",
    description: "Programa histórico de capacitación tecnológica. +500 jóvenes participantes, alianza estratégica con EY GDS Argentina.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/impulsatec",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ImpulsatecPage() {
  return (
    <ImpulsatecPageClient />
  );
}
