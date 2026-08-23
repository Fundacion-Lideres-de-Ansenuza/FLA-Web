import type { Metadata } from "next";
import PotenciatePageClient from "./PotenciatePageClient";

export const metadata: Metadata = {
  title: "Potenciate - Programa de Mentoría y Liderazgo Juvenil | FLA",
  description: "Programa de mentoría disruptivo de 12 semanas diseñado para inspirar a jóvenes argentinos a descubrir su pasión y transformarse en agentes de cambio. 35 egresados, 11 provincias alcanzadas. Edición 2021.",
  keywords: [
    "programa mentoría jóvenes",
    "liderazgo juvenil argentina",
    "potenciate",
    "mentoría argentina",
    "proyectos impacto social",
    "autoconocimiento jóvenes",
    "desarrollo personal",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Potenciate - Programa de Mentoría y Liderazgo Juvenil",
    description: "Programa histórico de mentoría de 12 semanas. 35 egresados de 11 provincias de Argentina. Una plataforma de inspiración y networking para jóvenes agentes de cambio.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/potenciate",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function PotenciatePage() {
  return (
    <PotenciatePageClient />
  );
}
