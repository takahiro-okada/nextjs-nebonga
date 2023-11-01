'use client'
import { useState } from 'react'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }

  return (
    <header className='w-full bg-white text-black relative py-3' role='banner'>
      <div className='flex items-center justify-between'>
        <h1>
          <a href='/' className='font-semibold text-xl tracking-tight'>
            NeBonga
          </a>
        </h1>
        <div className='flex items-center'>
          <nav className='hidden lg:flex'>
            <ul className='lg:flex space-x-4'>
              <li>
                <a href='/about' className='text-black hover:underline mx-4 lg:mx-6'>
                  About
                </a>
              </li>
              <li>
                <a href='/works' className='text-black hover:underline mx-4 lg:mx-6'>
                  Works
                </a>
              </li>
              <li>
                <a href='/story' className='text-black hover:underline mx-4 lg:mx-6'>
                  Story
                </a>
              </li>
              <li>
                <a href='/price' className='text-black hover:underline mx-4 lg:mx-6'>
                  Price
                </a>
              </li>
              <li>
                <a href='/contact' className='text-black hover:underline mx-4 lg:mx-6'>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button onClick={handleMenuOpen} type='button' className='lg:hidden z-50 space-y-2'>
            <div
              className={
                openMenu
                  ? 'w-8 h-0.5 bg-gray-600 translate-y-2.5 rotate-45 transition duration-500 ease-in-out'
                  : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
            <div
              className={
                openMenu
                  ? 'opacity-0 transition duration-500 ease-in-out'
                  : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
            <div
              className={
                openMenu
                  ? 'w-8 h-0.5 bg-gray-600 -rotate-45 transition duration-500 ease-in-out'
                  : 'w-8 h-0.5 bg-gray-600 transition duration-500 ease-in-out'
              }
            />
          </button>

          <nav
            className={
              openMenu
                ? 'z-30 text-left fixed bg-zinc-400 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 transition-transform transform translate-x-0 ease-linear duration-300'
                : 'z-30 text-left fixed bg-zinc-400 right-0 top-0 w-8/12 h-screen flex flex-col justify-start pt-8 px-3 transition-transform transform translate-x-full ease-linear duration-300'
            }
          >
            <ul>
              <li className='mb-4'>
                <a href='/about' className='text-black hover:underline'>
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
      </div>
    </header>
  )
}
