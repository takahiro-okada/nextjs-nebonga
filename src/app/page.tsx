import CardImage from './components/CardImage'
import ClientList from './components/ClientList'
import { FeaturedAbout } from './components/FeaturedAbout'
import MainVisual from './components/MainVisual'

export default function Home() {
  return (
    <main>
      <MainVisual />

      <CardImage />

      <FeaturedAbout />

      <ClientList />
    </main>
  )
}
