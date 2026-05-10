import type { Metadata } from "next"
import ProgramasPageClient from "./programas-page-client"

const PAGE_URL = "https://www.lideresdeansenuza.org/programas"

export const metadata: Metadata = {
  title: "Programas | Fundación Líderes de Ansenuza",
  description:
    "Conocé los programas activos e históricos de Fundación Líderes de Ansenuza para impulsar liderazgo, educación e impacto social en jóvenes.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-AR": PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: "Programas | Fundación Líderes de Ansenuza",
    description: "Catalogo de programas educativos y de liderazgo juvenil de FLA.",
    url: PAGE_URL,
    siteName: "Fundación Líderes de Ansenuza",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programas | Fundación Líderes de Ansenuza",
    description: "Explora programas activos e históricos de FLA.",
  },
}

export default function ProgramasPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Programas - Fundación Líderes de Ansenuza",
    url: PAGE_URL,
    isPartOf: "https://www.lideresdeansenuza.org",
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }} />
      <ProgramasPageClient />
    </>
  )
}

