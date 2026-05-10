import type { Metadata } from "next"
import QuienesSomosPageClient from "./quienes-somos-page-client"

const PAGE_URL = "https://www.lideresdeansenuza.org/quienes-somos"

export const metadata: Metadata = {
  title: "Quienes Somos | Fundacion Lideres de Ansenuza",
  description:
    "Conoce la historia, mision, vision, valores y equipo de Fundacion Lideres de Ansenuza, organizacion que impulsa liderazgo juvenil en Argentina.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-AR": PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: "Quienes Somos | Fundacion Lideres de Ansenuza",
    description: "Historia, valores y equipo de FLA.",
    url: PAGE_URL,
    siteName: "Fundacion Lideres de Ansenuza",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Quienes Somos | Fundacion Lideres de Ansenuza",
    description: "Descubre la historia y el equipo de FLA.",
  },
}

export default function QuienesSomosPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "Quienes Somos - Fundacion Lideres de Ansenuza",
    url: PAGE_URL,
    about: {
      "@type": "NGO",
      name: "Fundacion Lideres de Ansenuza",
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
