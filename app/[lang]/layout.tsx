import type React from "react"
import type { Metadata } from "next"
import { Inter, Contrail_One, Arimo } from "next/font/google"
import localFont from "next/font/local"
import "@/app/tailwind.css"
import "@/app/globals.css"
import Header from "@/components/navbar"
import Footer from "@/components/home/footer"
import { AccessibilityProvider } from "@/lib/context/AccessibilityContext"
import Accessibility from "@/components/accessibility/Accessibility"
import { i18n, type Locale } from "@/i18n/config"
import { getDictionary } from "@/lib/get-dictionary"

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }))
}

const inter = Inter({ subsets: ["latin"] })
const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
})
const fla = localFont({ src: "../../public/fonts/FLA.otf", variable: "--font-fla", display: "swap" })
const saridona = localFont({ src: "../../public/fonts/Saridona_personal use.ttf", variable: "--font-saridona", display: "swap" })
const contrailOne = Contrail_One({ weight: "400", subsets: ["latin"], variable: "--font-contrail-one", display: "swap" })

export const metadata: Metadata = {
  title: "Fundación Líderes de Ansenuza - Jóvenes transformando la educación",
  description: "Somos una ONG que diseña y ejecuta programas educativos gratuitos en el territorio argentino.",
  keywords: "educación, jóvenes, ONG, programas educativos, Argentina, voluntariado",
  authors: [{ name: "Fundación Líderes de Ansenuza" }],
  openGraph: {
    title: "Fundación Líderes de Ansenuza - Jóvenes transformando la educación",
    description: "Somos una ONG que diseña y ejecuta programas educativos gratuitos en el territorio argentino.",
    type: "website",
    locale: "es_AR",
  },
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: { lang: Locale }
}) {
  const dictionary = await getDictionary(params.lang)

  return (
    <html lang={params.lang}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className={`${inter.className} ${fla.variable} ${saridona.variable} ${contrailOne.variable} ${arimo.variable}`}>
        <AccessibilityProvider>
          <Header lang={params.lang} navigation={dictionary.navigation} />
          {children}
          <Footer dictionary={dictionary.footer} />
          <Accessibility />
        </AccessibilityProvider>
      </body>
    </html>
  )
}
