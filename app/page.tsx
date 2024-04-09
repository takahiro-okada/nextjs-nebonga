import ClientList from '@/components/pages/ClientList'
import Cta from '@/components/ui/Cta'
import FeaturedAbout from '@/components/pages/FeaturedAbout'
import LatestWorks from '@/components/pages/LatestWorks'
import MainVisual from '@/components/pages/MainVisual'

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
