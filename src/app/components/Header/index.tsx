'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }

  //topページを判定
  const path = usePathname()
  const isTop = path === '/'

  return (
    <header className={`${isTop ? 'absolute z-10 text-white' : 'relative'} w-full py-3`}>
      <div className='container relative  mx-auto flex items-center justify-center px-3  md:justify-between'>
        <h1>
          <a href='/' className='text-xl font-semibold tracking-tight'>
            <Image
              src='/logo.png'
              alt='NeBonga'
              width={100}
              height={100}
              className='h-full w-16 rounded-xl  object-cover'
            />
          </a>
        </h1>
        <nav className='hidden lg:flex'>
          <ul className='space-x-4 lg:flex'>
            <li>
              <Link href='/about' className='mx-4 hover:underline lg:mx-6'>
                About
              </Link>
            </li>
            <li>
              <Link href='/works' className='mx-4 hover:underline lg:mx-6'>
                Works
              </Link>
            </li>
            <li>
              <Link href='/story' className='mx-4 hover:underline lg:mx-6'>
                Story
              </Link>
            </li>
            <li>
              <Link href='/price' className='mx-4 hover:underline lg:mx-6'>
                Price
              </Link>
            </li>
            <li>
              <Link href='/contact' className='mx-4 hover:underline lg:mx-6'>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <div className='absolute right-0 flex items-center'>
          <button onClick={handleMenuOpen} type='button' className='z-50 space-y-2 lg:hidden'>
            <div
              className={
                openMenu
                  ? 'bg-gray-600 h-0.5 w-8 translate-y-2.5 rotate-45 transition duration-500 ease-in-out'
                  : 'bg-gray-600 h-0.5 w-8 transition duration-500 ease-in-out'
              }
            />
            <div
              className={
                openMenu
                  ? 'opacity-0 transition duration-500 ease-in-out'
                  : 'bg-gray-600 h-0.5 w-8 transition duration-500 ease-in-out'
              }
            />
            <div
              className={
                openMenu
                  ? 'bg-gray-600 h-0.5 w-8 -rotate-45 transition duration-500 ease-in-out'
                  : 'bg-gray-600 h-0.5 w-8 transition duration-500 ease-in-out'
              }
            />
          </button>

          <nav
            className={
              openMenu
                ? 'fixed right-0 top-0 z-30 flex h-screen w-full translate-x-0 animate-scaleInCenter flex-col justify-start bg-white px-3 pt-8 text-left transition-transform duration-300 ease-linear'
                : 'fixed right-0 top-0 z-30 flex h-screen w-full translate-x-full animate-scaleOutCenter flex-col justify-start bg-white px-3 pt-8 text-left transition-transform duration-300 ease-linear'
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
      </div>
    </header>
  )
}
