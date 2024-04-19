'use client'
import { motion } from 'framer-motion'

type Props = {
  title: string
  subtitle: string
}

export default function PageTitle({ title, subtitle }: Props) {
  return (
    <>
      <motion.div
        className='mt-10'
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <h2 className='text-center font-Montserrat text-4xl font-bold md:text-6xl'>{title}</h2>
        <p className='mt-3 text-center'>{subtitle}</p>
      </motion.div>
    </>
  )
}
