import type { Metadata } from "next"
import QuienesSomosPageClient from "./quienes-somos-page-client"

const PAGE_URL = "https://www.lideresdeansenuza.org/quienes-somos"

export const metadata: Metadata = {
  title: "Quiénes Somos | Fundación Líderes de Ansenuza",
  description:
    "Conocé la historia, misión, visión, valores y equipo de Fundación Líderes de Ansenuza, organización que impulsa liderazgo juvenil en Argentina.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-AR": PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: "Quiénes Somos | Fundación Líderes de Ansenuza",
    description: "Historia, valores y equipo de FLA.",
    url: PAGE_URL,
    siteName: "Fundación Líderes de Ansenuza",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quiénes Somos | Fundación Líderes de Ansenuza",
    description: "Descubre la historia y el equipo de FLA.",
  },
}

export default function QuienesSomosPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Quiénes Somos - Fundación Líderes de Ansenuza",
    url: PAGE_URL,
    about: {
      "@type": "NGO",
      name: "Fundación Líderes de Ansenuza",
      url: "https://www.lideresdeansenuza.org",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }} />
      <QuienesSomosPageClient />
    </>
  )
}

