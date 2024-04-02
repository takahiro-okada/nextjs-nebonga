import ClientList from './components/ClientList'
import Cta from './components/Cta'
import FeaturedAbout from './components/FeaturedAbout'
import LatestWorks from './components/LatestWorks'
import MainVisual from './components/MainVisual'

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
