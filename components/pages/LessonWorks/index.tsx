'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function LessonWorks() {
  return (
    <>
      <motion.h2
        className='text-3xl font-bold'
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        講演実績
      </motion.h2>
      <motion.p
        className='mt-6 leading-7'
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        対象：小学生～大学生 / 企業・団体向け
        <br />
        内容：JICA海外協力隊体験談・国際協力・異文化理解・SDGs教育・多文化共生・キャリア教育など
        <br />
        形態：対面/オンライン
        <br />
      </motion.p>
      <motion.div
        className='mt-6'
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <p>
          150件を超える講演実績のもと、講師を育成するアドバイザーもしておりますので、ご自身のプレゼンテーションにお悩みがある方も、お気軽にご相談ください。
        </p>
        <p className='mt-4'>ご依頼に関しましては、お問い合わせフォームよりご連絡ください。</p>
      </motion.div>

      <ul className='mt-12 grid gap-5 md:grid-cols-4 '>
        <motion.li
          className='w-full'
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <Image src='/images/lecture01.jpg' className='w-full' alt='スクリーンを見る学生' width={268} height={144} />
        </motion.li>
        <motion.li
          className='w-full'
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
            src='/images/lecture02.jpg'
            className='w-full'
            alt='学校で講演をしている様子'
            width={268}
            height={144}
          />
        </motion.li>
        <motion.li
          className='w-full'
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <Image src='/images/lecture03.jpg' className='w-full' alt='講演の様子' width={268} height={144} />
        </motion.li>
        <motion.li
          className='w-full'
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
            src='/images/lecture04.jpg'
            className='w-full'
            alt='JICA東京センターでの講演のチラシ'
            width={268}
            height={144}
          />
        </motion.li>
      </ul>
    </>
  )
}
