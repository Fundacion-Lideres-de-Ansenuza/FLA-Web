import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import localFont from "next/font/local"
import "./tailwind.css"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })
const fla = localFont({ src: "../public/fonts/FLA.otf", variable: "--font-fla", display: "swap" })

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
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&family=Contrail+One&display=swap" rel="stylesheet" />
      </head>
      <body className={`${inter.className} ${fla.variable}`}>{children}</body>
    </html>
  )
}
