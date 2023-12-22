import Image from 'next/image'

export default function ClientList() {
  return (
    <section className='mt-16'>
      <div className='mx-auto max-w-1140 bg-gray px-3 py-12'>
        <h2 className='text-center text-2xl'>お取引先一覧</h2>
        <div className='bg-gray-200 mx-auto mt-6 grid max-w-3xl grid-cols-3 justify-center gap-4 rounded-xl p-5 align-middle md:grid-cols-6'>
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
