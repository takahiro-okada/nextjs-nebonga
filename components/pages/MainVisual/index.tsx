'use client'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

export default function MainVisual() {
  const [videoVisible, setVideoVisible] = useState(false)

  useEffect(() => {
    if (videoVisible) {
      // ビデオの再生をここで制御する
      const videoElement = document.querySelector('video')
      if (videoElement) {
        videoElement.play()
      }
    }
  }, [videoVisible])

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
        delay: 2,
        duration: 0.5,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  }

  return (
    <section className='relative h-screen bg-black'>
      {videoVisible && (
        <>
          <motion.video
            src='./images/top.mp4'
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
      <div className={`absolute inset-0 ${videoVisible ? 'z-0 bg-transparent' : 'z-50 bg-black'}`}>
        <motion.div
          initial='hidden'
          animate='show'
          variants={neBongaContainer}
          className='absolute right-1/2 top-1/2 w-full -translate-y-1/2 translate-x-1/2 text-center'
        >
          <motion.p variants={textContainer} className='text-base tracking-[0.4em] text-white md:text-2xl'>
            {'より良い世界を創る'.split('').map((char, index) => (
              <motion.span key={index} variants={item}>
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            variants={neBongaContainer}
            className='mt-3 font-Montserrat text-5xl font-semibold tracking-widest text-white delay-300 md:mt-4 md:text-8xl'
          >
            {'NeBonga'.split('').map((char, index) => (
              <motion.span
                key={index}
                variants={item}
                onAnimationComplete={() => {
                  if (index === 'NeBonga'.length - 1) {
                    setVideoVisible(true)
                  }
                }}
              >
                {char}
              </motion.span>
            ))}
          </motion.p>
          <motion.p
            variants={textContainer}
            className='mt-3 text-center font-Montserrat text-sm tracking-widest text-white md:mt-4 md:text-lg'
          >
            {'Create a better number'.split('').map((char, index) => (
              <motion.span key={index} variants={item}>
                {char}
              </motion.span>
            ))}
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
}
