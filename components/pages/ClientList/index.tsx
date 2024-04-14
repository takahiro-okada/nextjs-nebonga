import Image from 'next/image'

import CommonContainer from '@/components/base/CommonContainer'

export default function ClientList() {
  return (
    <section className='mt-16 bg-grayLight'>
      <div className='mx-auto px-3 py-12'>
        <h2 className='text-center font-Montserrat text-2xl font-extrabold tracking-widest md:text-[28px]'>
          Our Client
        </h2>
        <CommonContainer>
          <div className='mx-auto mt-6 grid grid-cols-2 justify-center gap-4 p-5 align-middle md:max-w-4xl md:grid-cols-5'>
            <Image
              src='/images/company-logos/logo-jica.png'
              alt='JICAのロゴ'
              className='size-full rounded border bg-white object-contain p-2 aspect-square'
              width={200}
              height={200}
            />
            <Image
              src='/images/company-logos/logo-jada.png'
              alt='JADAのロゴ'
              className='size-full rounded border bg-white object-contain p-2 aspect-square'
              width={200}
              height={200}
            />
            <Image
              src='/images/company-logos/logo-osakauniv.png'
              alt='大阪大学のロゴ'
              className='size-full rounded border bg-white object-contain p-2 aspect-square'
              width={200}
              height={200}
            />
            <Image
              src='/images/company-logos/logo-kif.png'
              alt='かながわ国際交流財団のロゴ'
              className='size-full rounded border bg-white object-contain p-2 aspect-square'
              width={200}
              height={200}
            />
            <Image
              src='/images/company-logos/logo-caddi.png'
              alt='キャディ株式会社のロゴ'
              className='size-full rounded border bg-white object-contain p-2 aspect-square'
              width={200}
              height={200}
            />
            <Image
              src='/images/company-logos/logo-makilabo.jpg'
              alt='株式会社マキノハラボのロゴ'
              className='size-full rounded border bg-white object-contain p-2 aspect-square'
              width={200}
              height={200}
            />
            <Image
              src='/images/company-logos/logo-kobe-athlete.png'
              alt='神戸アスリートタウンクラブのロゴ'
              className='size-full rounded border bg-white object-contain p-2 aspect-square'
              width={200}
              height={200}
            />
            <Image
              src='/images/company-logos/logo-ccc.jpg'
              alt='CCCメディアハウスのロゴ'
              className='size-full rounded border bg-white object-contain p-2 aspect-square'
              width={200}
              height={200}
            />
            <Image
              src='/images/company-logos/logo-ecoring.png'
              alt='株式カイシャエコリングのロゴ'
              className='size-full rounded border bg-white object-contain p-2 aspect-square'
              width={200}
              height={200}
            />

            <Image
              src='/images/company-logos/logo-kokureo.png'
              alt='認定NPG法人コクレオの森のロゴ'
              className='size-full rounded border bg-white object-contain p-2 aspect-square'
              width={200}
              height={200}
            />
          </div>
        </CommonContainer>
      </div>
    </section>
  )
}
