import React, { useState } from 'react'

export default function HamburgerButton() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <div className='absolute right-3 flex items-center'>
      <button onClick={handleMenuOpen} type='button' className='z-50 space-y-2 lg:hidden'>
        <div
          className={
            openMenu
              ? 'bg-white h-0.5 w-8 translate-y-2.5 rotate-45 transition duration-500 ease-in-out'
              : 'bg-white h-0.5 w-8 transition duration-500 ease-in-out'
          }
        />
        <div
          className={
            openMenu
              ? 'opacity-0 transition duration-500 ease-in-out'
              : 'bg-white h-0.5 w-8 transition duration-500 ease-in-out'
          }
        />
        <div
          className={
            openMenu
              ? 'bg-white h-0.5 w-8 -rotate-45 transition duration-500 ease-in-out'
              : 'bg-white h-0.5 w-8 transition duration-500 ease-in-out'
          }
        />
      </button>

      <nav
        className={
          openMenu
            ? 'fixed right-0 top-0 z-30 flex h-screen w-full translate-x-0 animate-scaleInCenter flex-col justify-start bg-[#BDC4D0] px-3 pt-8 text-left transition-transform duration-300 ease-linear'
            : 'fixed right-0 top-0 z-30 flex h-screen w-full translate-x-full animate-scaleOutCenter flex-col justify-start bg-[#BDC4D0] px-3 pt-8 text-left transition-transform duration-300 ease-linear'
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
            <a href='/contact' className='text-black hover:underline'>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}
