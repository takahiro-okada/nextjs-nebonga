'use client'
import './globals.css'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

import Footer from '../app/components/Footer/'
import Header from '../app/components/Header/'
import TypekitLoader from './util/TypekitLoader'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NeBonga | Documentary Filmmaking',
  description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter()

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.href
      if (currentUrl === 'https://nebonga.com/') {
        router.push('https://hirokawasaki-works.com/')
      }
    }
  }, [router])

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
