import Image from 'next/image'

import { SliderImages } from '../components/SliderImages'
import { montserrat } from '@/app/util/fonts'

export default function About() {
  return (
    <main>
      <section className='mx-auto max-w-1140 px-3'>
        <div className='md:flex'>
          <div className='mt-20 md:w-1/2'>
            <h1 className={`${montserrat.className} text-5xl font-extrabold md:text-7xl`}>Passion on the border</h1>
            <p className='mt-6 text-lg'>境界線上の葛藤</p>
          </div>
          <div className='md:w-1/2'>
            <p className='mt-8'>
              志を持つすべての企業、人の取り組みをビジュアルコンテンツでサポート致します。
              人は葛藤しながらも、それでも情熱を絶やすことなく、前に進む。
              その奮闘と熱意の証を残すお手伝いをさせていただきます。
            </p>
            <p className='mt-8'>
              Our mission is to make better world with people who has passion. We are focusing on not only achieving
              goals with clients but also knowing subconscious through creating.
            </p>
          </div>
        </div>
      </section>

      <section className='mt-12'>
        <SliderImages />
      </section>

      <section className='mx-4 mt-12' data-section='company-person'>
        <div className='mx-auto max-w-1140 px-3'>
          <div className='flex flex-col-reverse md:flex-row md:gap-7'>
            <div className='mt-6 md:w-1/2'>
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
                better place through images.Making the world a better place through images.Making the world a better
                place through images.
                <br />
                Making the world a better place through images.Making the world a better place through images.Making the
                world a better place through images. Making the world a better place through images.Making the world a
                better place through images.
              </p>
            </div>
            <div className='mt-6 md:mt-0 md:w-1/2'>
              <Image
                src='/images/image-hiro.jpg'
                alt='NeBonga'
                width={640}
                height={480}
                className='h-full w-full  object-cover'
              />
            </div>
          </div>

          <div className='mt-10'>
            <div className='flex flex-col-reverse md:flex-row md:gap-7'>
              <div className='mt-6 md:w-1/2'>
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
                  Making the world a better place through images.Making the world a better place through images.Making
                  the world a better place through images.Making the world a better place through images. Making the
                  world a better place through images.Making the world a better place through images.Making the world a
                  better place through images.
                  <br />
                  Making the world a better place through images.Making the world a better place through images.Making
                  the world a better place through images. Making the world a better place through images.Making the
                  world a better place through images.
                </p>
              </div>
              <div className='mt-6 md:mt-0 md:w-1/2'>
                <Image
                  src='/images/image-hiro.jpg'
                  alt='NeBonga'
                  width={640}
                  height={480}
                  className='h-full w-full  object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-12 bg-gray py-16' data-section='about-logo'>
        <div className='mx-auto max-w-1140 px-3'>
          <div className='flex gap-10'>
            <div className='mt-6 p-16 md:mt-0 md:w-1/2'>
              <Image src='/logo.png' alt='NeBonga' width={640} height={640} className='h-full w-full  object-cover' />
            </div>
            <div className='mt-6 md:w-1/2'>
              <h2 className='text-2xl'>ロゴに込められた思い</h2>
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
                better place through images.Making the world a better place through images.Making the world a better
                place through images.
                <br />
                Making the world a better place through images.Making the world a better place through images.Making the
                world a better place through images. Making the world a better place through images.Making the world a
                better place through images.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className='mt-12'>
        <div className='mx-auto max-w-1140 px-3'>
          <div className='space-y-4'>
            <h2 className='text-2xl font-bold tracking-tighter'>会社概要</h2>
            <div className='grid-cols-2 items-start gap-4 md:grid'>
              <table className='text-left'>
                <tr className='border-b border-dashed border-gray-400'>
                  <th className='w-1/5 py-4 align-baseline'>会社名</th>
                  <td className='w-4/5 py-4'>株式会社NeBonga</td>
                </tr>
                <tr className='border-b border-dashed border-gray-400'>
                  <th className='w-1/5 py-4 align-baseline'>住所</th>
                  <td className='w-4/5 py-4'>
                    〒1500043
                    <br />
                    東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル 2F-C
                  </td>
                </tr>
                <tr className='border-b border-dashed border-gray-400'>
                  <th className='w-1/5 py-4 align-baseline'>代表</th>
                  <td className='w-4/5 py-4'>川崎 芳勲</td>
                </tr>
                <tr className='border-b border-dashed border-gray-400'>
                  <th className='w-1/5 py-4 align-baseline'>資本金</th>
                  <td className='w-4/5 py-4'>3,000,000円</td>
                </tr>
                <tr className='border-b border-dashed border-gray-400'>
                  <th className='w-1/5 py-4 align-baseline'>設立</th>
                  <td className='w-4/5 py-4'>2023年9月</td>
                </tr>
              </table>
              <table className='text-left'>
                <tr className='border-b border-dashed border-gray-400'>
                  <th className='w-1/5 py-4 align-baseline'>事業内容</th>
                  <td className='w-4/5 py-4'>
                    <ul className='list-disc'>
                      <li>写真・動画・映画コンテンツの企画、撮影、編集業務及びその制作物の販売</li>
                      <li>ソーシャルメディア、ＷＥＢサイト構築、運用並びにその他の広告宣伝</li>
                      <li>各種セミナー、イベント等の企画、開催、運営等及び講演等の受託</li>
                    </ul>
                  </td>
                </tr>
                <tr className='border-b border-dashed border-gray-400'>
                  <th className='w-1/5 py-4 align-baseline'>お問い合わせ</th>
                  <td className='w-4/5 py-4'>TODO:@nebonga.com</td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
