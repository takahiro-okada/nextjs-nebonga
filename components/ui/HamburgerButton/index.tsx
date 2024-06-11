'use client'
import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'

import SnsIcons from '@/components/ui/SnsIcons'

type HamburgerButtonProps = {
  handleMenuOpen: () => void
  isScrolled: boolean
  isTop: boolean
  openMenu: boolean
}

const menuItems = [
  { name: 'About', href: '/about/' },
  { name: 'Works', href: '/works/' },
  { name: 'Story', href: '/story/' },
  { name: 'Price', href: '/price/' },
  { name: 'News', href: '/news/' },
  { name: 'Contact', href: '/contact/' },
]

export default function HamburgerButton({ handleMenuOpen, isScrolled, isTop, openMenu }: HamburgerButtonProps) {
  const controls = useAnimation()
  const borderColor = isTop && !isScrolled ? 'bg-white' : 'bg-black'

  useEffect(() => {
    if (openMenu) {
      controls.start((i) => ({ opacity: 1, transition: { delay: 0.1 * i, duration: 0.3 }, y: 0 }))
    } else {
      controls.start({ opacity: 0, y: 20 })
    }
  }, [openMenu, controls])

  return (
    <div className='absolute right-4 flex items-center'>
      <button onClick={handleMenuOpen} type='button' className='z-40 space-y-1.5 lg:hidden'>
        <div
          className={
            openMenu
              ? 'h-0.5 w-6 translate-y-2 rotate-45 bg-black transition duration-500 ease-in-out'
              : `${borderColor} h-0.5 w-6 transition duration-500 ease-in-out`
          }
        />
        <div
          className={
            openMenu
              ? 'opacity-0 transition duration-500 ease-in-out'
              : `${borderColor} h-0.5 w-6 transition duration-500 ease-in-out`
          }
        />
        <div
          className={
            openMenu
              ? 'h-0.5 w-6 -rotate-45 bg-black transition duration-500 ease-in-out'
              : `${borderColor} h-0.5 w-6 transition duration-500 ease-in-out`
          }
        />
      </button>
      <nav
        className={
          openMenu
            ? 'fixed right-0 top-0 z-30 flex h-dvh w-full translate-x-0 flex-col justify-center bg-grayLight px-3 pt-8 text-center transition-transform duration-300 ease-linear'
            : 'fixed right-0 top-0 z-30 flex h-dvh w-full translate-x-full flex-col justify-center bg-grayLight px-3 pt-8 text-center transition-transform duration-300 ease-linear'
        }
      >
        <ul>
          {menuItems.map((item, index) => (
            <motion.li key={item.name} custom={index} initial={{ opacity: 0, y: 20 }} animate={controls}>
              <a href={item.href} className='inline-block py-3 font-Montserrat text-2xl text-black'>
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>
        <div className='mt-8'>
          <SnsIcons className='w-10' open={openMenu} />
        </div>
      </nav>
    </div>
  )
}
