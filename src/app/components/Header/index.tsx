'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import HamburgerButton from '../HamburgerButton'
import { montserrat } from '@/app/util/fonts'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu)
  }

  //topページを判定
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
              <Link href='/about' className={`mx-4 hover:underline lg:mx-6 ${montserrat.className}`}>
                About
              </Link>
            </li>
            <li>
              <Link href='/works' className={`mx-4 hover:underline lg:mx-6 ${montserrat.className}`}>
                Works
              </Link>
            </li>
            <li>
              <Link href='/story' className={`mx-4 hover:underline lg:mx-6 ${montserrat.className}`}>
                Story
              </Link>
            </li>
            <li>
              <Link href='/price' className={`mx-4 hover:underline lg:mx-6 ${montserrat.className}`}>
                Price
              </Link>
            </li>
            <li>
              <Link
                href='/contact'
                className={`mx-4 lg:mx-6 border-white border-[1px] py-1 px-4 rounded-full border-solid  ${montserrat.className}`}
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
