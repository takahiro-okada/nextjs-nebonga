import Image from 'next/image'

export function FeaturedAbout() {
  return (
    //tailwindcssで2カラムレイアウトを作成をして左側に画像､右側にテキストを配置
    <section className='mt-32'>
      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='relative'>
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
        </div>
        <div className='flex flex-col items-start justify-center'>
          <h3 className='text-3xl font-bold'>About</h3>
          <p className='mt-4'>
            はじめまして､nebongaと申します｡
            <br />
            このサイトでは､主にフロントエンド開発についての記事を書いていきます｡
            <br />
            また､日々の学びや､制作物についても紹介していきます｡
            <br />
            どうぞよろしくお願いいたします｡
          </p>
        </div>
      </div>

      <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
        <div className='flex flex-col items-start justify-center'>
          <h3 className='text-3xl font-bold'>About</h3>
          <p className='mt-4'>
            はじめまして､nebongaと申します｡
            <br />
            このサイトでは､主にフロントエンド開発についての記事を書いていきます｡
            <br />
            また､日々の学びや､制作物についても紹介していきます｡
            <br />
            どうぞよろしくお願いいたします｡
          </p>
        </div>
        <div className='relative'>
          <Image src='/images/bg-sample.jpg' alt='featured-about' objectFit='cover' width={640} height={480} />
        </div>
      </div>
    </section>
  )
}
