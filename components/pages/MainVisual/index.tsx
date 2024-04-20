'use client'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'

export default function MainVisual() {
  const [videoVisible, setVideoVisible] = useState(false)
  const videoRef = useRef(null)

  const neBongaContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delayChildren: 0.1,
        staggerChildren: 0.2,
      },
    },
  }

  const textContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        delay: 2.4,
        duration: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  const handleAnimationComplete = () => {
    setVideoVisible(true)
  }

  return (
    <section className='relative h-screen bg-black'>
      {videoVisible && (
        <>
          <motion.video
            ref={videoRef}
            src='/images/top.mp4'
            muted
            loop
            autoPlay
            playsInline
            preload='none'
            className='aspect-square h-screen w-full object-cover'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <div className='absolute inset-0 bg-black opacity-50' style={{ mixBlendMode: 'darken' }} />
        </>
      )}
      <motion.div
        initial='hidden'
        animate='show'
        variants={neBongaContainer}
        onAnimationComplete={handleAnimationComplete}
        className='absolute right-1/2 top-1/2 z-10 w-full -translate-y-1/2 translate-x-1/2 text-center'
      >
        <motion.p variants={textContainer} className='text-[14px] text-white'>
          {'より良い世界を創る'.split('').map((char, index) => (
            <motion.span key={index} variants={item}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          variants={neBongaContainer}
          className='mt-1 font-Montserrat text-[48px] font-semibold text-white delay-300 md:text-8xl'
        >
          {'NeBonga'.split('').map((char, index) => (
            <motion.span key={index} variants={item}>
              {char}
            </motion.span>
          ))}
        </motion.p>
        <motion.p
          variants={textContainer}
          className='mt-1 text-center font-Montserrat text-[10px] tracking-widest text-white'
        >
          {'Create a better world'.split('').map((char, index) => (
            <motion.span key={index} variants={item}>
              {char}
            </motion.span>
          ))}
        </motion.p>
      </motion.div>
    </section>
  )
}
