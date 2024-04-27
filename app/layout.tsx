import './globals.css'

import type { Metadata } from 'next'
import { Lato, Montserrat } from 'next/font/google'
import { Suspense } from 'react'

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
    <Suspense fallback={'<h1>Loading ...</h1>'}>
      <html lang='ja' className='overflow-x-hidden md:overflow-x-visible'>
        <body className={`${montserrat.variable} ${lato.variable} overflow-x-hidden md:overflow-x-auto`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </Suspense>
  )
}
