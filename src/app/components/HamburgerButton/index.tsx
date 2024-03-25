import React from 'react'

interface HamburgerButtonProps {
  handleMenuOpen: () => void
  openMenu: boolean
}

export default function HamburgerButton({ handleMenuOpen, openMenu }: HamburgerButtonProps) {
  return (
    <div className='absolute right-3 flex items-center'>
      <button onClick={handleMenuOpen} type='button' className='z-50 space-y-2 lg:hidden'>
        <div
          className={
            openMenu
              ? 'h-0.5 w-8 translate-y-2.5 rotate-45 bg-black transition duration-500 ease-in-out'
              : 'h-0.5 w-8 bg-white transition duration-500 ease-in-out'
          }
        />
        <div
          className={
            openMenu
              ? 'opacity-0 transition duration-500 ease-in-out'
              : 'h-0.5 w-8 bg-white transition duration-500 ease-in-out'
          }
        />
        <div
          className={
            openMenu
              ? 'h-0.5 w-8 -rotate-45 bg-black transition duration-500 ease-in-out'
              : 'h-0.5 w-8 bg-white transition duration-500 ease-in-out'
          }
        />
      </button>

      <nav
        className={
          openMenu
            ? 'fixed right-0 top-0 z-30 flex h-screen w-full translate-x-0 flex-col justify-start bg-white px-3 pt-8 text-left transition-transform duration-300 ease-linear'
            : 'fixed right-0 top-0 z-30 flex h-screen w-full translate-x-full flex-col justify-start bg-white px-3 pt-8 text-left transition-transform duration-300 ease-linear'
        }
      >
        <ul>
          <li className='mb-4'>
            <a href='/about' className='text-white hover:underline'>
              About
            </a>
          </li>
          <li className='mb-4'>
            <a href='/works' className='text-black hover:underline'>
              Works
            </a>
          </li>
          <li className='mb-4'>
            <a href='/story' className='text-black hover:underline'>
              Story
            </a>
          </li>
          <li className='mb-4'>
            <a href='/price' className='text-black hover:underline'>
              Price
            </a>
          </li>
          <li className='mb-4'>
            <a href='/news' className='text-black hover:underline'>
              News
            </a>
          </li>
          <li className='mb-4'>
            <a href='/contact' className='text-black hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
