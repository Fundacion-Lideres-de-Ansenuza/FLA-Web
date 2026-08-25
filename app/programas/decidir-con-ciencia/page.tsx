import type { Metadata } from "next";
import DecidirConCienciaPageClient from "./DecidirConCienciaPageClient";

export const metadata: Metadata = {
  title: "Decidir con Ciencia - Pensamiento científico para escuelas secundarias | FLA",
  description: "Programa educativo gratuito para escuelas secundarias de Córdoba basado en Thinking-Based Learning (TBL) y enfoque STEM. Estudiantes de 14 a 20 años aprenden a analizar evidencias y tomar decisiones fundamentadas. Fundación Líderes de Ansenuza.",
  keywords: [
    "decidir con ciencia",
    "pensamiento científico",
    "programa educativo secundaria",
    "TBL thinking based learning",
    "STEM educación argentina",
    "escuelas secundarias Córdoba",
    "toma de decisiones estudiantes",
    "programa educativo gratuito",
    "fundación líderes ansenuza",
    "ciencia jóvenes argentina"
  ],
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Decidir con Ciencia - Pensamiento científico para escuelas secundarias",
    description: "Programa gratuito para escuelas secundarias de Córdoba. Metodología TBL y enfoque STEM para tomar decisiones fundamentadas frente a desafíos reales. Edición 2026.",
    type: "website",
    locale: "es_AR",
    url: "https://www.lideresdeansenuza.org/programas/decidir-con-ciencia",
    siteName: "Fundación Líderes de Ansenuza"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function DecidirConCienciaPage() {
  return <DecidirConCienciaPageClient />;
}
