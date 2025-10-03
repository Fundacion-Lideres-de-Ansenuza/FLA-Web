import type React from "react"
import type { Metadata } from "next"
import { Inter, Contrail_One, Arimo } from "next/font/google"
import localFont from "next/font/local"
import "./tailwind.css"
import "./globals.css"
import Header from "@/components/navbar"
import Footer from "@/components/home/footer"

const inter = Inter({ subsets: ["latin"] })
const arimo = Arimo({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-arimo",
})
const fla = localFont({ src: "../public/fonts/FLA.otf", variable: "--font-fla", display: "swap" })
const saridona = localFont({ src: "../public/fonts/Saridona_personal use.ttf", variable: "--font-saridona", display: "swap" })
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <head />
      <body className={`${inter.className} ${arimo.variable} ${fla.variable} ${saridona.variable} ${contrailOne.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
