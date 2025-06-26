import type React from "react"
import type { Metadata } from "next"
import { Manrope, Lora } from "next/font/google" // Import Manrope and Lora
import StyledComponentsRegistry from "@/lib/styled-components-registry"
import GlobalStyle from "@/styles/globals"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
})

export const metadata: Metadata = {
  title: "Aoren - Türkiye'nin Önde Gelen Hukuk Bürosu",
  description: "Aoren Hukuk Bürosu - Hukuki danışmanlık, arabuluculuk ve yasal destek hizmetleri",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className={`${manrope.variable} ${lora.variable}`}>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}


import './globals.css'