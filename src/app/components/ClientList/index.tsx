import Image from 'next/image'

import { SectionTitle } from '../SectionTitle'

export default function ClientList() {
  return (
    <section className='mt-16'>
      <div className='container mx-auto px-3'>
        <SectionTitle title='お取引先一覧' subtitle='Client' />
        <div className='mx-auto mt-6 grid max-w-3xl grid-cols-3 justify-center gap-4 rounded-xl bg-gray-200 p-5 align-middle md:grid-cols-4'>
          <Image
            src='/client01.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/client02.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/client03.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/client04.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/client01.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/client02.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/client03.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/client04.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/client01.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/client02.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/client03.png'
            alt='featured-about'
            className='h-full w-full rounded border bg-white object-contain p-2'
            objectFit='contain'
            width={640}
            height={480}
          />
          <Image
            src='/client04.png'
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
