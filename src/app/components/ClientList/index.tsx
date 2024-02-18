import Image from 'next/image'
import { montserrat } from '../../util/fonts'

export default function ClientList() {
  return (
    <section className='mt-16 bg-gray'>
      <div className='mx-auto max-w-1140 px-3 py-12'>
        <h2 className={`text-2xl font-extrabold md:text-[28px] tracking-widest text-center  ${montserrat.className}`}>
          Our Client
        </h2>
        <div className='bg-gray-200 mx-auto mt-6 grid max-w-3xl grid-cols-2 justify-center gap-4 rounded-xl p-5 align-middle md:grid-cols-6'>
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/images/sample-logo.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
        </div>
      </div>
    </section>
  )
}
