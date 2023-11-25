import Image from 'next/image'

import { SectionTitle } from '../SectionTitle'

export function FeaturedAbout() {
  return (
    <section className='mt-32'>
      <div className='container mx-auto px-3'>
        <SectionTitle title='NeBongaについて' subtitle='About Us' />
        <div className='mt-16'>
          <div className='gap-10 md:flex md:flex-row-reverse'>
            <div className='relative md:w-1/2'>
              <Image
                src='/images/bg-sample.jpg'
                alt='featured-about'
                objectFit='cover'
                width={640}
                height={480}
                className='rounded-xl'
              />
            </div>
            <div className='flex flex-col items-start justify-center md:w-1/2'>
              <h3 className='mt-3 text-2xl'>”先導する”ブランディング</h3>
              <p className='text-sm'>Lead your brand</p>

              <p className='mt-4'>
                写真や映像で人の魅力を引き出し、ストーリーを伝えます。撮影に入るまでの対話を大切にすることを心がけ、「半歩先を歩く黒子」を常に目指しています。
              </p>
              <p className='mt-4'>
                I capture the essence and charm of individuals through photos and videos, conveying their stories. I
                always prioritize meaningful dialogue before any shoot, and constantly strive to be the unseen guide,
                always a step ahead.
              </p>
            </div>
          </div>

          <div className='mt-8 gap-8 md:flex'>
            <div className='relative md:w-1/2'>
              <Image
                src='/images/bg-sample.jpg'
                alt='featured-about'
                objectFit='cover'
                width={640}
                height={480}
                className='rounded-xl'
              />
            </div>
            <div className='flex flex-col items-start justify-center md:w-1/2'>
              <h3 className='mt-3 text-2xl'>”先導する”ブランディング</h3>
              <p className='text-sm'>Lead your brand</p>

              <p className='mt-4'>
                写真や映像で人の魅力を引き出し、ストーリーを伝えます。撮影に入るまでの対話を大切にすることを心がけ、「半歩先を歩く黒子」を常に目指しています。
              </p>
              <p className='mt-4'>
                I capture the essence and charm of individuals through photos and videos, conveying their stories. I
                always prioritize meaningful dialogue before any shoot, and constantly strive to be the unseen guide,
                always a step ahead.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
