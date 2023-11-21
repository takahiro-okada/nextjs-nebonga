import Image from 'next/image'

import CardImage from './components/CardImage'
import { FeaturedAbout } from './components/FeaturedAbout'
import MainVisual from './components/MainVisual'
import { SectionTitle } from './components/SectionTitle'

export default function Home() {
  return (
    <main>
      <MainVisual />

      <CardImage />

      <FeaturedAbout />

      <section className='mt-8'>
        <SectionTitle title='お取引先一覧' subtitle='Client' />

        {/* SPは2カラムでPCは4カラムで表示 */}
        <div className='mx-auto mt-6 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
        </div>
      </section>
    </main>
  )
}
