import Image from 'next/image'

import { SliderImages } from '../components/SliderImages'

export default function About() {
  return (
    <main>
      <section className='mx-auto max-w-1140 px-3'>
        <div className='mt-20'>
          <h1 className='text-4xl font-extrabold'>
            映像を通して､
            <br />
            世界を良くする
          </h1>
          <p className='mt-6'>Making the world a better place through images</p>
        </div>
        <div className=''>
          <p className='mt-8'>
            映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡
          </p>
          <p className='mt-8'>
            Making the world a better place through images.Making the world a better place through images.Making the
            world a better place through images.Making the world a better place through images.Making the world a better
            place through images.Making the world a better place through images.Making the world a better place through
            imagesMaking the world a better place through images.Making the world a better place through images.Making
            the world a better place through images.Making the world a better place through images.Making the world a
            better place through images.
          </p>
        </div>
      </section>

      <section className='mt-12'>
        <SliderImages />
      </section>

      <section className='mx-4 mt-12'>
        <div className=''>
          <div className=''>
            <h2 className='text-2xl'>川崎 芳勲</h2>
            <p>Yoshimasa Kawasaki</p>
            <p className='mt-6'>
              映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡
              <br />
              映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡
              <br />
              <br />
              映像を通して､世界をよくする｡映像を通して､世界をよくする｡
              <br />
              映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡
              <br />
              映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡映像を通して､世界をよくする｡
            </p>
            <p className='mt-6'>
              Making the world a better place through images.Making the world a better place through images.Making the
              world a better place through images.Making the world a better place through images. Making the world a
              better place through images.Making the world a better place through images.Making the world a better place
              through images.
              <br />
              Making the world a better place through images.Making the world a better place through images.Making the
              world a better place through images. Making the world a better place through images.Making the world a
              better place through images.
            </p>
          </div>
          <div className='mt-6'>
            <Image
              src='/images/image-hiro.jpg'
              alt='NeBonga'
              width={640}
              height={480}
              className='h-full w-full  object-cover'
            />
          </div>
        </div>
      </section>
    </main>
  )
}
