'use client'
import Image from 'next/image'

import { Button } from '../Button'
import { motion } from 'framer-motion'
import React from 'react'

export default function FeaturedAbout() {
  return (
    <section className='-mt-12 lg:-mt-16'>
      <div className=''>
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
          <div className='relative mx-auto px-3'>
            <h2 className='absolute -left-5 top-8 w-fit translate-x-0 rotate-90 text-lg tracking-widest after:absolute after:top-1/2 after:ml-6 after:inline-block after:w-16 after:border-t-2 after:border-black lg:text-3xl lg:after:w-32'>
              About us
            </h2>
          </div>
        </motion.div>
        <div className='lg:flex lg:flex-row-reverse'>
          <div className='relative ml-auto w-3/4 lg:ml-0 lg:w-1/2'>
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
              <Image
                src='/images/top-about_01.jpg'
                alt='featured-about'
                objectFit='cover'
                width={757}
                height={505}
                className='max-h-[505px] w-full object-cover'
              />
            </motion.div>
          </div>
          <div className='relative z-10 mx-5 -mt-6 flex flex-col items-start justify-center bg-white bg-none p-8 lg:m-0  lg:-mr-16 lg:mt-28 lg:w-1/2 lg:max-w-[575px] lg:justify-end lg:bg-white'>
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
              <h3 className='font-Montserrat text-2xl font-semibold'>Beyond the Border</h3>
              <p className='mt-1 text-sm tracking-widest'>境界を越えて</p>

              <div className='mt-8'>
                <p className='text-[14px] leading-relaxed tracking-wider'>
                  世の中にはいろんな境界が存在しています。目には見える境界、見えない境界。越えたくても越えられない境界。「昨日には存在しなかった境界の向こう側」へと踏み出すきっかけを映像や写真を通じて生み出してきます。そして、その過程を「半歩前を歩く黒子」として先導させて頂きます。あなたが境界を越える。それを見た別の誰かが境界を越えてゆく。私たちは、その循環を真摯に生み出し続けていきます。
                </p>
                <p className='mt-4 font-Montserrat text-[14px] leading-relaxed tracking-wider'>
                  There are many borders in this world.
                  <br />
                  Visible one, invisible one and that they want to cross but can't.We create an opportunity to step
                  "beyond the border that didn't exist yesterday" through creating.
                  <br />
                  And we will lead the process as "stagehand walking half a step ahead".You cross a border. Someone else
                  sees it and crosses the boundary.We will continue to earnestly create that cycle.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        <div className='mt-16 lg:mt-32'>
          <div className='gap-8 lg:flex lg:items-start'>
            <div className='relative mr-auto w-3/4 lg:mr-0 lg:mt-28 lg:w-1/2'>
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
                <Image
                  src='/images/top-about_02.jpg'
                  alt='featured-about'
                  objectFit='cover'
                  width={757}
                  height={505}
                  className='max-h-[505px] w-full object-cover'
                />
              </motion.div>
            </div>
            <div className='relative z-10 mx-5 -mt-6 flex flex-col items-start justify-center bg-white bg-none p-8 lg:m-0 lg:-ml-16  lg:w-1/2 lg:max-w-[575px] lg:justify-start lg:bg-white'>
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
                <h3 className='font-Montserrat text-2xl font-semibold'>Extracting the one and only story</h3>
                <p className='mt-1 text-sm tracking-widest'>唯一無二のストーリーを抽出する</p>

                <div className='mt-8'>
                  <p className='text-[14px] leading-relaxed tracking-wider'>
                    企業のSDGsへの取り組みなど、そこには具体的な数字などでは可視化できない人間の熱い想いや葛藤が存在します。
                    <br />
                    その想いを、化石を発掘するが如く丁寧に掘り起こし、対話を通じて映像の中に編み込んでいきます。
                    <br />
                    この過程にこそ映像制作の魅力は存在しています。 <br />
                    唯一無二のストーリーをぜひ一緒にカタチにさせてください。
                  </p>
                  <p className='mt-4 font-Montserrat text-[14px] leading-relaxed tracking-wider'>
                    In the SDGs initiatives of companies, there exist passionate feelings and conflicts that cannot be
                    visualized in concrete numbers.
                    <br />
                    These thoughts are carefully unearthed as if excavating fossils, and then woven into the images
                    through dialogue.
                    <br />
                    It is in this process that the appeal of video production lies.
                    <br />
                    We look forward to working with you to make the one and only your story.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
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
          <div className='mx-auto mt-14 text-center lg:mt-24'>
            <Button href='/about'>View more</Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
