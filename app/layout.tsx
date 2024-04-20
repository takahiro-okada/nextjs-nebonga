import './globals.css'

import type { Metadata } from 'next'
import { Lato, Montserrat } from 'next/font/google'

import Footer from '@/components/base/Footer'
import Header from '@/components/base/Header'

export const metadata: Metadata = {
  title: 'NeBonga | Documentary Filmmaking',
  description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
  icons: {
    icon: '/favicon.ico',
  },
}

export const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-montserrat',
  weight: ['400', '700'],
})

export const lato = Lato({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja'>
      <body className={`${montserrat.variable} ${lato.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
