import Image from 'next/image'

import CommonContainer from '../CommonContainer'

export default function ClientList() {
  return (
    <section className='mt-16 bg-[#F5F6F7]'>
      <div className='mx-auto px-3 py-12'>
        <h2 className='text-center font-Montserrat text-2xl font-extrabold tracking-widest md:text-[28px]'>
          Our Client
        </h2>
        <CommonContainer>
          <div className='mx-auto mt-6 grid grid-cols-2 justify-center gap-4 p-5 align-middle md:grid-cols-6'>
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
            <Image
              src='/images/sample-logo.png'
              alt='featured-about'
              className='size-full rounded border bg-white object-contain p-2'
              objectFit='contain'
              width={640}
              height={480}
            />
          </div>
        </CommonContainer>
      </div>
    </section>
  )
}
