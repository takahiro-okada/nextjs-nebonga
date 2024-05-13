import React from 'react'

import type { Metadata } from 'next'
import AboutMainVisual from '@/components/pages/AboutMainVisual'
import AboutSlider from '@/components/pages/AboutSlider'
import AboutProfile from '@/components/pages/AboutProfile'
import AboutLogo from '@/components/pages/AboutLogo'
import AboutCompany from '@/components/pages/AboutCompany'

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
