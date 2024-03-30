'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import CommonContainer from '@/app/components/CommonContainer'
import SnsIcons from '@/app/components/SnsIcons'

export default function Footer() {
  return (
    <footer className='mt-24 bg-[#F5F6F7] py-10'>
      <CommonContainer>
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
          <div className='md:flex md:items-center md:justify-between'>
            <div className='flex justify-center'>
              <a href='/' className='text-xl font-semibold tracking-tight'>
                <Image
                  src='/logo.png'
                  alt='NeBonga'
                  width={150}
                  height={150}
                  className='h-full w-24 rounded-xl  object-cover'
                />
              </a>
            </div>
            <div className='mt-10 sm:flex sm:items-center sm:justify-between'>
              <ul className='mb-6 flex flex-wrap items-center justify-center text-sm font-medium sm:mb-0'>
                <li className='w-1/2 md:w-fit'>
                  <Link className='inline-block w-full px-3 py-2 text-center font-Montserrat font-bold' href='/about'>
                    About
                  </Link>
                </li>
                <li className='w-1/2 md:w-fit'>
                  <Link className='inline-block w-full px-3 py-2 text-center font-Montserrat font-bold' href='/works'>
                    Works
                  </Link>
                </li>
                <li className='w-1/2 md:w-fit'>
                  <Link className='inline-block w-full px-3 py-2 text-center font-Montserrat font-bold' href='/story'>
                    Story
                  </Link>
                </li>
                <li className='w-1/2 md:w-fit'>
                  <Link className='inline-block w-full px-3 py-2 text-center font-Montserrat font-bold' href='/price'>
                    News
                  </Link>
                </li>
                <li className='w-1/2 md:w-fit'>
                  <Link className='inline-block w-full px-3 py-2 text-center font-Montserrat font-bold' href='/price'>
                    Price
                  </Link>
                </li>
                <li className='w-1/2 md:w-fit'>
                  <Link className='inline-block w-full px-3 py-2 text-center font-Montserrat font-bold' href='/contact'>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
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
          <div className='mt-10 md:mt-16 md:flex md:items-center md:justify-between'>
            <div className=''>
              <SnsIcons />
            </div>
            <div className='mt-3 flex justify-center'>
              <span className='sm:text-center'>©NeBonga</span>
            </div>
          </div>
        </motion.div>
      </CommonContainer>
    </footer>
  )
}
