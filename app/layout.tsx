import type React from "react"
import type { Metadata } from "next"
import { Inter, DM_Serif_Display } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import Footer from "@/components/layout/footer"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-serif",
})

export const metadata: Metadata = {
  title: "Unidad Educativa Bilingüe Delta - Formamos mujeres líderes",
  description:
    "Colegio católico bilingüe para niñas en Guayaquil, Ecuador. Educación de excelencia desde inicial hasta bachillerato internacional con formación en valores y liderazgo.",
  keywords: "colegio, educación, bilingüe, niñas, Guayaquil, Ecuador, católico, IB, bachillerato internacional",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${inter.variable} ${dmSerifDisplay.variable}`}>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
