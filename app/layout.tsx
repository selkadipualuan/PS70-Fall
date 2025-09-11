import "./globals.css"
import type React from "react"
import ScrollToTop from "./components/ScrollToTop"
import { siteConfig } from "./config"

export const metadata = siteConfig

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link 
          rel="icon" 
          href="/bulldogicon.png" 
          type="image/png"
        />
        <link 
          rel="preload" 
          href="/fonts/MonumentExtended-Regular.otf" 
          as="font" 
          type="font/otf" 
          crossOrigin="anonymous" 
        />
        <link 
          rel="preload" 
          href="/fonts/AsteroneRegular.ttf" 
          as="font" 
          type="font/ttf" 
          crossOrigin="anonymous" 
        />
      </head>
      <body className="bg-black text-[#f5f5f5] dark subtle-grain">
        <ScrollToTop />
        {children}
      </body>
    </html>
  )
}

