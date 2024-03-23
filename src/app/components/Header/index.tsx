'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

import HamburgerButton from '../HamburgerButton'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }

  const path = usePathname()
  const isTop = path === '/'

  return (
    <header className={`${isTop ? 'fixed z-50 text-white' : 'relative'} w-full py-3 `}>
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
              <Link href='/about' className='mx-4 font-Montserrat hover:underline lg:mx-6'>
                About
              </Link>
            </li>
            <li>
              <Link href='/works' className='mx-4 font-Montserrat hover:underline lg:mx-6'>
                Works
              </Link>
            </li>
            <li>
              <Link href='/story' className='mx-4 font-Montserrat hover:underline lg:mx-6'>
                Story
              </Link>
            </li>
            <li>
              <Link href='/news' className='mx-4 font-Montserrat hover:underline lg:mx-6'>
                News
              </Link>
            </li>
            <li>
              <Link href='/price' className='mx-4 font-Montserrat hover:underline lg:mx-6'>
                Price
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className='mx-4 rounded-full border-DEFAULT border-solid border-white px-4 py-1 font-Montserrat lg:mx-6'
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <HamburgerButton openMenu={openMenu} handleMenuOpen={handleMenuOpen} />
      </div>
    </header>
  )
}
