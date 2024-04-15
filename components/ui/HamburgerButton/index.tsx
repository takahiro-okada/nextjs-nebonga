import React from 'react'

import SnsIcons from '@/components/ui/SnsIcons'

interface HamburgerButtonProps {
  handleMenuOpen: () => void
  isScrolled: boolean
  isTop: boolean
  openMenu: boolean
}

export default function HamburgerButton({ handleMenuOpen, isScrolled, isTop, openMenu }: HamburgerButtonProps) {
  const borderColor = isTop && !isScrolled ? 'bg-white' : 'bg-black'

  return (
    <div className='absolute right-3 flex items-center'>
      <button onClick={handleMenuOpen} type='button' className='z-50 space-y-2 lg:hidden'>
        <div
          className={
            openMenu
              ? 'h-0.5 w-8 translate-y-2.5 rotate-45 bg-black transition duration-500 ease-in-out'
              : `${borderColor} h-0.5 w-8 transition duration-500 ease-in-out`
          }
        />
        <div
          className={
            openMenu
              ? 'opacity-0 transition duration-500 ease-in-out'
              : `${borderColor} h-0.5 w-8 transition duration-500 ease-in-out`
          }
        />
        <div
          className={
            openMenu
              ? 'h-0.5 w-8 -rotate-45 bg-black transition duration-500 ease-in-out'
              : `${borderColor} h-0.5 w-8 transition duration-500 ease-in-out`
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
          <li>
            <a href='/about/' className='inline-block py-6 font-Montserrat text-3xl text-black'>
              About
            </a>
          </li>
          <li>
            <a href='/works/' className='inline-block py-6 font-Montserrat text-3xl text-black'>
              Works
            </a>
          </li>
          <li>
            <a href='/story/' className='inline-block py-6 font-Montserrat text-3xl text-black'>
              Story
            </a>
          </li>
          <li>
            <a href='/price/' className='inline-block py-6 font-Montserrat text-3xl text-black'>
              Price
            </a>
          </li>
          <li>
            <a href='/news/' className='inline-block py-6 font-Montserrat text-3xl text-black'>
              News
            </a>
          </li>
          <li>
            <a href='/contact/' className='inline-block py-6 font-Montserrat text-3xl text-black'>
              Contact
            </a>
          </li>
        </ul>
        <div className='mt-8'>
          <SnsIcons className='w-12' />
        </div>
      </nav>
    </div>
  )
}
