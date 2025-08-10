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
  icons: {
    icon: "/images/logo/favicon-logo.jpg",
    shortcut: "/images/logo/favicon-logo.jpg",
    apple: "/images/logo/favicon-logo.jpg",
  },
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
        <div id="global-loader" data-loader className="fixed inset-0 z-[99999] flex items-center justify-center bg-white opacity-100 pointer-events-none">
          <div className="logo-spinner animate-logo-glow">
            <img src="/images/logo/lsme-logo.jpg" alt="Loading" className="spinner-logo" />
          </div>
        </div>
        <script dangerouslySetInnerHTML={{
          __html: `(()=>{try{var el=document.querySelector('[data-loader]');if(!el)return;setTimeout(function(){el.style.transition='opacity 250ms ease';el.style.opacity='0';setTimeout(function(){el&&el.parentNode&&el.parentNode.removeChild(el)},280)},4000)}catch(e){}})();`
        }} />
        {children}
      </body>
    </html>
  )
}
