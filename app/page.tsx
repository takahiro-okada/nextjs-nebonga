import ClientList from '@/components/pages/ClientList'
import FeaturedAbout from '@/components/pages/FeaturedAbout'
import LatestWorks from '@/components/pages/LatestWorks'
import MainVisual from '@/components/pages/MainVisual'
import Cta from '@/components/ui/Cta'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'NeBonga | Documentary Filmmaking',
  description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
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
