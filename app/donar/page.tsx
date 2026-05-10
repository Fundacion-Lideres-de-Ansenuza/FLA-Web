import type { Metadata } from "next"
import DonationPageClient from "./donation-page-client"

const PAGE_URL = "https://www.lideresdeansenuza.org/donar"

export const metadata: Metadata = {
  title: "Donar | Fundacion Lideres de Ansenuza",
  description:
    "Donaciones para sostener programas educativos gratuitos de Fundacion Lideres de Ansenuza. Opciones: Donar Online, PayPal y transferencia bancaria.",
  alternates: {
    canonical: PAGE_URL,
    languages: {
      "es-AR": PAGE_URL,
      en: PAGE_URL,
    },
  },
  openGraph: {
    title: "Donar | Fundacion Lideres de Ansenuza",
    description: "Colabora con programas educativos gratuitos para jovenes en Argentina.",
    url: PAGE_URL,
    siteName: "Fundacion Lideres de Ansenuza",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donar | Fundacion Lideres de Ansenuza",
    description: "Ayuda a financiar programas educativos de impacto social.",
  },
}

export default function DonationPage() {
  return <DonationPageClient />
}
