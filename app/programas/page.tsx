import type { Metadata } from "next"
import ProgramasPageClient from "./programas-page-client"

const PAGE_URL = "https://www.lideresdeansenuza.org/programas"

export const metadata: Metadata = {
  title: "Programas | Fundacion Lideres de Ansenuza",
  description:
    "Conoce los programas activos e historicos de Fundacion Lideres de Ansenuza para impulsar liderazgo, educacion e impacto social en jovenes.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-AR": PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: "Programas | Fundacion Lideres de Ansenuza",
    description: "Catalogo de programas educativos y de liderazgo juvenil de FLA.",
    url: PAGE_URL,
    siteName: "Fundacion Lideres de Ansenuza",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Programas | Fundacion Lideres de Ansenuza",
    description: "Explora programas activos e historicos de FLA.",
  },
}

export default function ProgramasPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Programas - Fundacion Lideres de Ansenuza",
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
