import type { Metadata } from "next"
import ContactanosPageClient from "./contactanos-page-client"

const PAGE_URL = "https://www.lideresdeansenuza.org/contactanos"

export const metadata: Metadata = {
  title: "Contacto | Fundacion Lideres de Ansenuza",
  description:
    "Contactate con Fundacion Lideres de Ansenuza para voluntariado, alianzas y colaboraciones en programas educativos para jovenes en Argentina.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-AR": PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: "Contacto | Fundacion Lideres de Ansenuza",
    description:
      "Canal de contacto institucional para voluntariado, alianzas y colaboraciones con programas educativos de impacto.",
    url: PAGE_URL,
    siteName: "Fundacion Lideres de Ansenuza",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contacto | Fundacion Lideres de Ansenuza",
    description: "Escribinos para voluntariado, alianzas y trabajo conjunto.",
  },
}

export default function ContactanosPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contacto - Fundacion Lideres de Ansenuza",
    url: PAGE_URL,
    about: {
      "@type": "NGO",
      name: "Fundacion Lideres de Ansenuza",
      url: "https://www.lideresdeansenuza.org",
      email: "contacto@lideresdeansenuza.org",
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }} />
      <ContactanosPageClient />
    </>
  )
}
