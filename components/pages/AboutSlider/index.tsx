'use client'
import { motion } from 'framer-motion'
import React from 'react'

import { SliderImages } from '@/components/pages/SliderImages'

export default function AboutSlider() {
  return (
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
  )
}
