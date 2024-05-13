import type { Metadata } from 'next'
import React from 'react'

import AboutCompany from '@/components/pages/AboutCompany'
import AboutLogo from '@/components/pages/AboutLogo'
import AboutMainVisual from '@/components/pages/AboutMainVisual'
import AboutProfile from '@/components/pages/AboutProfile'
import AboutSlider from '@/components/pages/AboutSlider'

export const metadata: Metadata = {
  title: 'NeBonga | About',
  description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
}

export default function About() {
  return (
    <main className='mt-32'>
      <AboutMainVisual />

      <AboutSlider />

      <AboutProfile />

      <AboutLogo />

      <AboutCompany />
    </main>
  )
}
