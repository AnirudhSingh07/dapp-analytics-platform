import type React from "react"
import type { Metadata } from "next"
import { Providers } from "./providers"
import "./globals.css"




export const metadata: Metadata = {
  title: "DApp Analytics Platform",
  description: "Decentralized analytics platform for DApp testing and user insights",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={` `}>
      <body className="font-sans">
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
