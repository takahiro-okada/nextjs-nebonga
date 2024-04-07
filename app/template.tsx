'use client'
import { motion } from 'framer-motion'
import React from 'react'

const variants = {
  enter: { opacity: 1 },
  hidden: { opacity: 0 },
}

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={variants}
      initial='hidden'
      animate='enter'
      transition={{
        duration: 2,
        type: 'linear',
      }}
    >
      {children}
    </motion.div>
  )
}
