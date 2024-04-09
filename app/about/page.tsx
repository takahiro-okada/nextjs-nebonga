'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

import CommonContainer from '@/components/base/CommonContainer'
import ProfileSection from '@/components/pages/ProfileSection'
import { SliderImages } from '@/components/pages/SliderImages'

export default function About() {
  return (
    <main className='mt-32'>
      <motion.div
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <section className='mt-16'>
          <CommonContainer>
            <div className='md:ml-16 md:flex'>
              <div className='pt-16 md:w-1/2 md:pt-12'>
                <span className='absolute right-0 top-0 w-fit translate-x-0 rotate-90 text-sm tracking-widest after:absolute after:top-1/2 after:ml-6 after:inline-block after:h-1 after:w-16 after:border-t after:border-black md:-left-5 md:top-8 lg:after:w-52'>
                  About
                </span>
                <h1 className='font-Montserrat text-5xl font-extrabold md:text-7xl '>
                  Passion on
                  <br />
                  the border
                </h1>
                <p className='mt-6 text-lg'>境界線上の情熱</p>
              </div>
              <div className='md:w-1/2'>
                <p className='mt-8'>
                  志を持つすべての企業、人の取り組みをビジュアルコンテンツでサポート致します。
                  <br />
                  人は葛藤しながらも、それでも情熱を絶やすことなく、前に進む。
                  その奮闘と熱意の証を残すお手伝いをさせていただきます。
                </p>
                <p className='mt-8 font-lato leading-7'>
                  Our mission is to make better world with people who has passion. We are focusing on not only achieving
                  goals with clients but also knowing subconscious through creating.
                </p>
              </div>
            </div>
          </CommonContainer>
        </section>
      </motion.div>

      <section className='mt-24 md:mt-44'>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <SliderImages />
        </motion.div>
      </section>

      <section className='mt-24' data-section='company-person'>
        <CommonContainer>
          <ProfileSection
            name='川崎 芳勲'
            englishName='Yoshihiro Kawasaki'
            descriptionJa={`株式会社NeBonga 代表取締役。<br><br>1990年生まれ、神奈川県横浜市在住。<br>映像作家・写真家。<br>企業/団体のPR映像制作、国際協力・教育分野のコンテンツ制作。<br>大学生時代より56カ国を旅し、人間の暮らしや営みを撮影することに夢中になる。<br>その経験から、「対話」と「相互理解」を撮影のべースとしており、信頼関係の構築から得られる説得力のある映像制作を得意としている。`}
            descriptionEn={`NeBonga Inc.<br>CEOBorn in 1990 in Yokohama. Based in Tokyo, Japan.​<br>CinematographerPR movie / Creation of contents related international cooperation, education and so on.<br>I’ve traveled to 56 countries and started to take photography of people's life around the world.<br>Based on this experience (includes time in Uganda for two years),  Having deep conversation and trusting each other is my most important value.`}
            imageSrc='/images/profile-hiro.jpg'
            timeline={[
              { event: '関西学院大法学部政治学科卒', year: '2013' },
              { event: 'JICA海外協力隊としてウガンダ共和国へ', year: '2014' },
              { event: '現地での活動や帰国後の社会還元が評価され天皇皇后両陛下に謁見を賜る', year: '2017' },
              { event: '個人事業主として独立', year: '2018' },
              { event: '株式会社NeBonga設立', year: '2023' },
            ]}
          />
          <div className='mt-24'>
            <ProfileSection
              name='平松 佑理'
              englishName='Yuri Hiramatsu'
              descriptionJa={`株式会社NeBonga 営業・経理・写真撮影 担当。<br>食品マーケティング会社勤務時代に、地域食材を使った商品開発や卸営業、小売店の運営等多岐に渡る業務を経験。<br>特に兵庫県豊岡市の和菓子店での勤務では、お客様の喜んでいただける顔が見えることに、やりがいを感じていた。<br>現在は、学生時代に勉強していた手話を活かし、国際手話の通訳士の勉強をしている。`}
              descriptionEn={`NeBonga Inc. Sales/Accounting/Photography<br>While working for a food marketing company, I experienced a wide range of business activities such as product development using local ingredients, wholesale sales, and retail store management.<br>Working at a Japanese sweet shop in Toyooka City, Hyogo Prefecture, I feel happiness when I have nice conversation with customers.<br>Currently, I'm studying to become an interpreter for International Signs by making use of my experience of studying it when I was student.`}
              imageSrc='/images/profile-yuri.jpg'
              timeline={[
                { event: '同志社大学　商学部商学科卒', year: '2010' },
                { event: '損害保険会社勤務', year: '2010' },
                { event: 'JICA海外協力隊としてフィリピンへ', year: '2015' },
                { event: '食品マーケティング企業勤務', year: '2018' },
                { event: '株式会社NeBongaに入社', year: '2023' },
              ]}
            />
          </div>
        </CommonContainer>
      </section>

      <section className='mt-12 bg-grayLight py-16' data-section='about-logo'>
        <CommonContainer>
          <div className='mx-auto justify-center md:flex md:max-w-[960px] md:gap-10'>
            <div className='mt-6 p-16 md:mt-0 md:w-1/2'>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                <Image src='/logo.png' alt='NeBonga' width={640} height={640} className='' />
              </motion.div>
            </div>
            <div className='mt-6 md:w-1/2'>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                <h2 className='text-3xl'>ロゴに込められた思い</h2>
              </motion.div>
              <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                <p className='mt-6 leading-[1.85]'>
                  NeBongaはウガンダ共和国で使用されている言葉の１つであるガンダ語で、《Ne（And/With）＋Bonga（グータッチの挨拶の習慣）》を組み合わせた造語になります。
                  <br />
                  どんな人でもBongaちょうだい！というと笑顔でグータッチをしてくれた。
                  <br />
                  あの瞬間に胸の中に広がるものをクリエイティブな仕事を通じて再現していきたいという想いがあります。
                </p>
                <p className='mt-6 leading-[1.85]'>
                  {`"AKWATA EMPOLA ATUKA WALA NAWOLOVU ATUKA KU KIBUGA"`}
                  <br />
                  「ゆっくり始めれば遠くまで行くことができる。カメレオンもやがて街へたどり着く」
                  <br />
                  ウガンダで出会ったこの諺から着想を得て、カメレオンをモチーフにしたロゴにしました。
                  <br />
                  熱い芯を持ちつつも、変幻自在なクリエイターを目指して。
                </p>
              </motion.div>
            </div>
          </div>
        </CommonContainer>
      </section>

      <section className='mt-12'>
        <CommonContainer>
          <div className='space-y-4'>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <h2 className='text-2xl font-bold tracking-tighter'>会社概要</h2>
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.5,
                duration: 0.8,
                ease: 'easeOut',
              }}
            >
              <div className='grid-cols-2 items-start gap-4 md:grid md:gap-24'>
                <table className='text-left'>
                  <tr className='border-b border-[#EDEFF1]'>
                    <th className='w-1/3 py-6 align-baseline md:w-1/5'>会社名</th>
                    <td className='w-2/3 py-6 md:w-4/5'>
                      株式会社NeBonga(ネボンガ)
                      <br />
                      (英語表記:NeBonga.inc)
                    </td>
                  </tr>
                  <tr className='border-b border-[#EDEFF1]'>
                    <th className='w-1/3 py-6 align-baseline md:w-1/5'>住所</th>
                    <td className='w-2/3 py-6 md:w-4/5'>
                      〒1500043
                      <br />
                      東京都渋谷区道玄坂1丁目10番8号渋谷道玄坂東急ビル 2F-C
                    </td>
                  </tr>
                  <tr className='border-b border-[#EDEFF1]'>
                    <th className='w-1/3 py-6 align-baseline md:w-1/5'>代表</th>
                    <td className='w-2/3 py-6 md:w-4/5'>川崎 芳勲</td>
                  </tr>
                  <tr className='border-b border-[#EDEFF1]'>
                    <th className='w-1/3 py-6 align-baseline md:w-1/5'>資本金</th>
                    <td className='w-2/3 py-6 md:w-4/5'>3,000,000円</td>
                  </tr>
                  <tr className='border-b border-[#EDEFF1]'>
                    <th className='w-1/3 py-6 align-baseline md:w-1/5'>創業</th>
                    <td className='w-2/3 py-6 md:w-4/5'>2023年9月</td>
                  </tr>
                </table>
                <table className='text-left'>
                  <tr className='border-b border-[#EDEFF1]'>
                    <th className='w-1/3 py-6 align-baseline md:w-1/5'>事業内容</th>
                    <td className='w-2/3 py-6 md:w-4/5'>
                      <ul className='list-disc'>
                        <li>写真・動画・映画コンテンツの企画、撮影、編集業務及びその制作物の販売</li>
                        <li>ソーシャルメディア、ＷＥＢサイト構築、運用並びにその他の広告宣伝</li>
                        <li>各種セミナー、イベント等の企画、開催、運営等及び講演等の受託</li>
                      </ul>
                    </td>
                  </tr>
                  <tr className='border-b border-[#EDEFF1]'>
                    <th className='w-1/3 py-6 align-baseline md:w-1/5'>取引先銀行</th>
                    <td className='w-2/3 py-6 md:w-4/5'>三井住友銀行・GMOあおぞらネット銀行</td>
                  </tr>
                  <tr className='border-b border-[#EDEFF1]'>
                    <th className='w-1/3 py-6 align-baseline md:w-1/5'>お問い合わせ</th>
                    <td className='w-2/3 py-6 md:w-4/5'>y.kawasaki@nebonga.com</td>
                  </tr>
                </table>
              </div>
            </motion.div>
          </div>
        </CommonContainer>
      </section>
    </main>
  )
}
