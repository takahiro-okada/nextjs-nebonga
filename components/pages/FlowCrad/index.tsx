'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface FlowCardProps {
  description: string
  iconImageSrc: string
  number: string
  titleEn: string
  titleJa: string
}

export default function FlowCard({ description, iconImageSrc, number, titleEn, titleJa }: FlowCardProps) {
  return (
    <>
      <motion.li
        className='w-full max-w-80 bg-white px-10 py-8 md:px-6 md:py-8'
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <div className='font-Montserrat text-[18px]'>{number}</div>
        <h3 className='mt-3 font-Montserrat text-2xl font-bold'>{titleEn}</h3>
        <p>{titleJa}</p>
        <Image className='mx-auto mt-6 md:w-[72px]' src={iconImageSrc} alt='' width={100} height={100} />
        <p className='mt-6 text-[15px]'>{description}</p>
      </motion.li>
    </>
  )
}
