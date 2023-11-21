import Image from 'next/image'

import { SliderImages } from '../components/SliderImages'

export default function About() {
  return (
    <main>
      <section>
        <div className='relative h-96 max-w-full'>
          <Image src='/images/bg-sample.jpg' className='max-w-full' alt='TODO:altを入れる' layout='fill' />
        </div>
        <div className='relative z-10 mx-4 -mt-10 max-w-3xl rounded-xl bg-white p-10 px-4 shadow-lg'>
          <h2 className='text-center text-4xl'>NeBongについて</h2>
          <p className='mt-3 text-center'>About Us</p>
          <h3 className='mt-5 text-center text-2xl'>
            <span className='inline-block'>映像を通して､</span>
            <span className='inline-block'>世界をよくする</span>
          </h3>
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
        <Image src='/images/bg-sample.jpg' className='max-w-full' alt='TODO:altを入れる' layout='fill' />
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
          Making the world a better place through images.Making the world a better place through images.Making the world
          a better place through images.Making the world a better place through images. Making the world a better place
          through images.Making the world a better place through images.Making the world a better place through images.
          <br />
          Making the world a better place through images.Making the world a better place through images.Making the world
          a better place through images. Making the world a better place through images.Making the world a better place
          through images.
        </p>
      </section>
    </main>
  )
}
