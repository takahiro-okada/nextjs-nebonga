'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import CommonContainer from '@/components/base/CommonContainer'

export default function AboutLogo() {
  return (
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
  )
}
