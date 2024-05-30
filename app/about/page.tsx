import type { Metadata } from 'next'
import React from 'react'

import AboutCompany from '@/components/pages/AboutCompany'
import AboutLogo from '@/components/pages/AboutLogo'
import AboutMainVisual from '@/components/pages/AboutMainVisual'
import AboutProfile from '@/components/pages/AboutProfile'
import AboutSlider from '@/components/pages/AboutSlider'

export const metadata: Metadata = {
  title: 'NeBonga | Videography&Photography - About',
  description:
    '株式会社NeBonga（ネボンガ）は、企業/団体向けのあらゆる企画・撮影・演出・編集をワンストップで行うプロダクションです。',
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
