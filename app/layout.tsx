import './globals.css'

import type { Metadata } from 'next'
import { Lato, Montserrat } from 'next/font/google'

import Footer from '@/app/components/Footer'
import Header from '@/app/components/Header'

export const metadata: Metadata = {
  title: 'NeBonga | Documentary Filmmaking',
  description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
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
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
