import Image from 'next/image'

export function FeaturedAbout() {
  return (
    <section className='-mt-16 md:-mt-16'>
      <div className=''>
        <div className='relative mx-auto max-w-1140 px-3'>
          <h2 className='absolute -left-3 w-fit translate-x-0 rotate-90 tracking-widest md:text-3xl'>About us</h2>
        </div>
        <div className='gap-10 md:flex md:flex-row-reverse'>
          <div className='relative ml-auto w-3/4 md:ml-0 md:w-1/2'>
            <Image
              src='/images/bg-sample.jpg'
              alt='featured-about'
              objectFit='cover'
              width={640}
              height={480}
              className='max-h-96 w-full object-cover'
            />
          </div>
          <div className='mx-5 -mt-6 flex flex-col items-start justify-center bg-white bg-none p-8 md:m-0 md:ml-20 md:w-1/2 md:max-w-md md:justify-end md:bg-inherit'>
            <h3 className='mt-3 text-xl'>”先導する”ブランディング</h3>
            <p className='text-sm'>Lead your brand</p>

            <p className='mt-4 text-xs'>
              写真や映像で人の魅力を引き出し、ストーリーを伝えます。撮影に入るまでの対話を大切にすることを心がけ、「半歩先を歩く黒子」を常に目指しています。
            </p>
            <p className='mt-4 text-xs'>
              I capture the essence and charm of individuals through photos and videos, conveying their stories. I
              always prioritize meaningful dialogue before any shoot, and constantly strive to be the unseen guide,
              always a step ahead.
            </p>
          </div>
        </div>

        <div className='mt-16 md:mt-32'>
          <div className='gap-8 md:flex'>
            <div className='relative mr-auto w-3/4 md:mr-0 md:w-1/2'>
              <Image
                src='/images/bg-sample.jpg'
                alt='featured-about'
                objectFit='cover'
                width={640}
                height={480}
                className='max-h-96 w-full object-cover'
              />
            </div>
            <div className='mx-5 -mt-6 flex flex-col items-start justify-center bg-white bg-none p-8 md:m-0 md:w-1/2 md:max-w-md md:justify-end md:bg-inherit'>
              <h3 className='mt-3 text-xl'>”先導する”ブランディング</h3>
              <p className='text-sm'>Lead your brand</p>

              <p className='mt-4 text-xs'>
                写真や映像で人の魅力を引き出し、ストーリーを伝えます。撮影に入るまでの対話を大切にすることを心がけ、「半歩先を歩く黒子」を常に目指しています。
              </p>
              <p className='mt-4 text-xs'>
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
