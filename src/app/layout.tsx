import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import Footer from '../app/components/Footer/'
import Header from '../app/components/Header/'
import TypekitLoader from './util/TypekitLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NeBonga | Documentary Filmmaking',
  description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' className='font-yuGothic'>
      <TypekitLoader />
      <body className='font-yuGothic'>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
