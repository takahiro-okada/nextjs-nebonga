import './globals.css'

import type { Metadata } from 'next'
import { Lato, Montserrat, Zen_Kaku_Gothic_New } from 'next/font/google'

import Footer from '@/components/base/Footer'
import Header from '@/components/base/Header'

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
  },
  robots: {
    googleBot: {
      index: false,
    },
  },
}

export const montserrat = Montserrat({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-montserrat',
})

export const lato = Lato({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-lato',
  weight: ['400', '700'],
})

const zenKaku = Zen_Kaku_Gothic_New({
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-zenkaku',
  weight: ['400', '700'],
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' className='overflow-x-hidden md:overflow-x-visible'>
      <body
        className={`${montserrat.variable} ${lato.variable} ${zenKaku.className} overflow-x-hidden md:overflow-x-auto`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
