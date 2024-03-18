import './globals.css'

import type { Metadata } from 'next'

import Footer from './components/Footer'
import Header from './components/Header'

export const metadata: Metadata = {
  title: 'NeBonga | Documentary Filmmaking',
  description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ja' className='font-yuGothic'>
      <body className='font-yuGothic'>
        <Header />
        <div>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
