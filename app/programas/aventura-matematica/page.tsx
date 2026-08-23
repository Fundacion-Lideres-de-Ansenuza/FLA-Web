import type { Metadata } from "next";
import AventuraMatematicaPageClient from "./AventuraMatematicaPageClient";

export const metadata: Metadata = {
  title: "Aventura Matemágica - Concurso de Matemática Creativa | FLA",
  description: "Concurso virtual inmersivo que transformó la educación matemática en una experiencia creativa combinando matemática y mundos de ficción. 300 participantes, 25 semifinalistas. Edición 2021.",
  keywords: [
    "educación matemática jóvenes",
    "aventura matemágica",
    "concurso matemática argentina",
    "aprendizaje lúdico",
    "matemática creativa",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Aventura Matemágica - Concurso de Matemática Creativa",
    description: "Programa histórico de educación matemática. 300 participantes, aprendizaje lúdico con mundos de ficción como Harry Potter.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/aventura-matematica",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function AventuraMatematicaPage() {
  return (
    <AventuraMatematicaPageClient />
  );
}
