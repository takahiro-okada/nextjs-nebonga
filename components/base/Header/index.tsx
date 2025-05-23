'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

import HamburgerButton from '@/components/ui/HamburgerButton'

export default function Header() {
  const [openMenu, setOpenMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 100)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuOpen = () => setOpenMenu(!openMenu)

  const path = usePathname()
  const isTop = path === '/'

  const textColorClass = isTop ? (isScrolled ? 'text-black' : 'text-white') : 'text-black'
  const headerClass = `${isTop && !isScrolled ? 'bg-tranparent' : 'bg-white'} ${isScrolled ? ' shadow-md' : ''} fixed top-0 z-40 w-full py-2 transition-all duration-300`
  const bgColorClass = isTop && !isScrolled ? 'bg-white' : 'bg-black'

  const logoPath = isScrolled || !isTop ? '/logo.png' : '/logo_white.png'
  return (
    <header className={headerClass}>
      <div className='container relative mx-auto flex items-center justify-center px-3 md:justify-between'>
        <h1>
          <Link href='/' className={`text-xl font-semibold tracking-tight ${textColorClass}`}>
            <Image
              src={logoPath}
              alt='NeBonga'
              width={100}
              height={100}
              className={`h-full object-contain ${isScrolled ? 'w-10 md:w-14' : 'w-12 md:w-16'}`}
            />
          </Link>
        </h1>
        <nav className='hidden lg:flex'>
          <ul className='gap-10 lg:flex'>
            {['about', 'works', 'gallery', 'story', 'news', 'price'].map((item) => (
              <li key={item}>
                <Link href={`/${item}/`} className={`group relative font-Montserrat ${textColorClass}`}>
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                  <span
                    className={`absolute -bottom-1 left-0 h-px w-0 bg-black transition-all duration-500 group-hover:w-full ${bgColorClass}`}
                  ></span>
                </Link>
              </li>
            ))}
            <li>
              <Link
                href='/contact/'
                className={`font-Montserrat ${textColorClass} ${isTop && !isScrolled ? 'border border-white' : 'border border-black'} rounded-full px-5 py-1 transition-all duration-300 hover:bg-black/10`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <HamburgerButton openMenu={openMenu} handleMenuOpen={handleMenuOpen} isTop={isTop} isScrolled={isScrolled} />
      </div>
    </header>
  )
}
