'use client'
import { motion } from 'framer-motion'

import { Button } from '@/components/ui/Button'

export default function CtaButtons() {
  return (
    <div className='flex flex-col content-center justify-center gap-6 md:flex-row'>
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
        <Button href='/contact'>フォームからお問い合わせ</Button>
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
        <Button href='https://page.line.me/167gakqf' buttonColor='bg-[#00B900]'>
          LINEからお問い合わせ
        </Button>
      </motion.div>
    </div>
  )
}
