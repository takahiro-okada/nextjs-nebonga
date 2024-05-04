'use client'
import { motion } from 'framer-motion'

type Props = {
  title: string
  subtitle: string
}

export function SectionTitle({ title, subtitle }: Props) {
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
      <section>
        <div className='relative'>
          <h2 className='relative w-fit font-Montserrat text-2xl font-semibold tracking-wide after:absolute after:top-1/2 after:ml-6 after:inline-block after:w-36 after:border-t after:border-black md:text-4xl'>
            {title}
          </h2>
          <p className='mt-1 text-sm tracking-wide'>{subtitle}</p>
        </div>
      </section>
    </motion.div>
  )
}
