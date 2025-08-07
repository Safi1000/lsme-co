import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"

const inter = Inter({ 
  subsets: ["latin"],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "LSME - Leading Saudi Railway Solutions",
  description: "Advanced research, development, and technical services for railway infrastructure. Driving the future of transportation technology across Saudi Arabia.",
  keywords: "railway, Saudi Arabia, research, development, transportation, LSME",
  authors: [{ name: "LSME Railway Solutions" }],
  creator: "LSME Railway Solutions",
  publisher: "LSME Railway Solutions",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lsme.sa",
    title: "LSME - Leading Saudi Railway Solutions",
    description: "Advanced research, development, and technical services for railway infrastructure.",
    siteName: "LSME Railway Solutions",
  },
  twitter: {
    card: "summary_large_image",
    title: "LSME - Leading Saudi Railway Solutions",
    description: "Advanced research, development, and technical services for railway infrastructure.",
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
