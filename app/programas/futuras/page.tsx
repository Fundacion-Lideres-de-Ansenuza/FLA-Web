import type { Metadata } from "next";
import FuturasPageClient from "./FuturasPageClient";

export const metadata: Metadata = {
  title: "FUTURAS - Programa de Liderazgo y Empoderamiento Femenino | FLA",
  description: "Programa de liderazgo, mentoría y empoderamiento femenino para mujeres jóvenes argentinas. 7 ediciones, 248 participantes egresadas, 18 provincias. Programa histórico 2017-2024.",
  keywords: [
    "empoderamiento femenino",
    "liderazgo mujeres jóvenes",
    "futuras",
    "mentoría femenina argentina",
    "desarrollo personal mujeres",
    "fundación líderes ansenuza",
    "programa histórico"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "FUTURAS - Programa de Liderazgo y Empoderamiento Femenino",
    description: "Programa histórico de liderazgo femenino. 7 ediciones realizadas, 248 participantes egresadas de 18 provincias de Argentina.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/futuras",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function FuturasPage() {
  return (
    <FuturasPageClient />
  );
}
