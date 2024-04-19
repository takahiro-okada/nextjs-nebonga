'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface PriceCardProps {
  title: string | string[]
  additionalInfo: string
  caseNumber: string
  description: string
  points: string[]
  priceRange: string
}

export default function PriceCard({
  title,
  additionalInfo,
  caseNumber,
  description,
  points,
  priceRange,
}: PriceCardProps) {
  return (
    <>
      <motion.li
        viewport={{ once: true }}
        className='relative rounded-xl border border-grayDark px-8 pb-8  pt-10 md:px-16 md:pb-16 md:pt-12'
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <p className='absolute left-1/2 top-0 min-w-52 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black px-9 py-2 text-center text-white'>
          CASE {caseNumber}
        </p>
        <h3 className='whitespace-pre-wrap text-center text-2xl font-bold md:text-3xl'>{title}</h3>
        <p className='mt-1 text-center'>{description}</p>
        <p className='relative mt-6 text-center font-Montserrat text-5xl font-extrabold after:absolute after:bottom-[-24px] after:left-1/2 after:inline-block after:w-16 after:-translate-x-1/2 after:border-t-2 after:border-black lg:after:w-32'>
          {priceRange}
          <span className='text-xl'>万円</span>
        </p>
        <p className='mt-12 md:mt-16'>{additionalInfo}</p>
        <ul className='mt-3 flex flex-wrap gap-4'>
          {points.map((point, index) => (
            <li key={index} className=''>
              <Image
                src={'/images/icon-checkbox.svg'}
                alt={''}
                width={20}
                height={20}
                className='mr-2 inline object-cover'
              />
              {point}
            </li>
          ))}
        </ul>
      </motion.li>
    </>
  )
}
