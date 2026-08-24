import type { Metadata } from "next";
import CienciaFueraDeLaCajaPageClient from "./CienciaFueraDeLaCajaPageClient";

export const metadata: Metadata = {
  title: "Ciencia Fuera de la Caja - Programa Educativo Científico | FLA",
  description: "Concurso científico virtual de alto impacto para desarrollar el pensamiento científico, la creatividad y el pensamiento lateral en jóvenes argentinos. 234 participantes, 65% mujeres. Edición 2020.",
  keywords: [
    "educación científica jóvenes",
    "ciencia fuera de la caja",
    "concurso científico argentina",
    "pensamiento lateral",
    "creatividad científica",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Ciencia Fuera de la Caja - Concurso Científico Virtual",
    description: "Programa histórico de educación científica. 234 participantes, 90% de efectividad en la enseñanza, 65% participación femenina.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/ciencia-fuera-de-la-caja",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CienciaFueraDeLaCajaPage() {
  return (
    <CienciaFueraDeLaCajaPageClient />
  );
}
