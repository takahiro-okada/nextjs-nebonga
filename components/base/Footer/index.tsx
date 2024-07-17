import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import CommonContainer from '@/components/base/CommonContainer'
import SnsIcons from '@/components/ui/SnsIcons'

export default function Footer() {
  return (
    <footer className='mt-24 bg-grayLight py-10'>
      <CommonContainer>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center'>
            <Link href='/' className='text-xl font-semibold tracking-tight'>
              <Image
                src='/logo.png'
                alt='NeBonga'
                width={150}
                height={150}
                className='h-full w-24 rounded-xl  object-cover'
              />
            </Link>
          </div>
          <div className='mt-10 sm:flex sm:items-center sm:justify-between'>
            <ul className='mb-6 flex flex-wrap items-center justify-center text-sm sm:mb-0'>
              {[
                { href: '/about/', text: 'About' },
                { href: '/works/', text: 'Works' },
                { href: '/gallery/', text: 'Gallery' },
                { href: '/story/', text: 'Story' },
                { href: '/news/', text: 'News' },
                { href: '/price/', text: 'Price' },
                { href: '/contact/', text: 'Contact' },
              ].map((link, index) => (
                <li key={index}>
                  <Link className='inline-block w-full px-3 py-2 text-center font-Montserrat' href={link.href}>
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='mt-10 md:mt-16 md:flex md:items-center md:justify-between'>
          <SnsIcons open />
          <div className='mt-3 flex justify-center'>
            <span className='font-Montserrat sm:text-center'>© NeBonga</span>
          </div>
        </div>
      </CommonContainer>
    </footer>
  )
}
