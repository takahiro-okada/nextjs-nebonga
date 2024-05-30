import type { Metadata } from 'next'

import ClientList from '@/components/pages/ClientList'
import FeaturedAbout from '@/components/pages/FeaturedAbout'
import LatestWorks from '@/components/pages/LatestWorks'
import MainVisual from '@/components/pages/MainVisual'
import Cta from '@/components/ui/Cta'

export const metadata: Metadata = {
  title: 'NeBonga | Videography&Photography',
  description:
    '株式会社NeBonga（ネボンガ）は、企業/団体向けのあらゆる企画・撮影・演出・編集をワンストップで行うプロダクションです。',
  metadataBase: new URL('https://nebonga.com'),
  openGraph: {
    images: ['./images/ogp.png'],
  },
}

export default function Home() {
  return (
    <main>
      <MainVisual />

      <LatestWorks />

      <FeaturedAbout />

      <ClientList />

      <Cta />
    </main>
  )
}
