import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "LSME - Engineering Solutions",
  description: "Advanced research, development, and technical engineering services across industries in Saudi Arabia.",
  keywords: "engineering, Saudi Arabia, research, development, technology, LSME",
  authors: [{ name: "LSME Engineering Solutions" }],
  creator: "LSME Engineering Solutions",
  publisher: "LSME Engineering Solutions",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lsme.sa",
    title: "LSME - Engineering Solutions",
    description: "Advanced research, development, and technical engineering services.",
    siteName: "LSME Engineering Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "LSME - Engineering Solutions",
    description: "Advanced research, development, and technical engineering services.",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
