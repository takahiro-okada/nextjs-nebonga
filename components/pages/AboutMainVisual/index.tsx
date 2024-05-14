'use client'
import { motion } from 'framer-motion'

import CommonContainer from '@/components/base/CommonContainer'

export default function AboutMainVisual() {
  return (
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
                the Border
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
  )
}
