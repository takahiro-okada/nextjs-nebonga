import Image from 'next/image'
import Link from 'next/link'

import SnsIcons from '../SnsIcons'
import { montserrat } from '../util/fonts'

export default function Footer() {
  return (
    <footer className='mt-24 bg-gray py-10'>
      <div className='mx-auto max-w-1140 px-3'>
        <div className='md:flex md:items-center md:justify-between'>
          <div className='flex justify-center'>
            <a href='/' className='text-xl font-semibold tracking-tight'>
              <Image
                src='/logo.png'
                alt='NeBonga'
                width={150}
                height={150}
                className='h-full w-24 rounded-xl  object-cover'
              />
            </a>
          </div>
          <div className='mt-10 sm:flex sm:items-center sm:justify-between'>
            <ul className='mb-6 flex flex-wrap items-center justify-center text-sm font-medium sm:mb-0'>
              <li className='w-1/2 md:w-fit'>
                <Link className={`inline-block w-full px-3 py-2 text-center ${montserrat.className}`} href='/about'>
                  About
                </Link>
              </li>
              <li className='w-1/2 md:w-fit'>
                <Link className={`inline-block w-full px-3 py-2 text-center ${montserrat.className}`} href='/works'>
                  Works
                </Link>
              </li>
              <li className='w-1/2 md:w-fit'>
                <Link className={`inline-block w-full px-3 py-2 text-center ${montserrat.className}`} href='/story'>
                  Story
                </Link>
              </li>
              <li className='w-1/2 md:w-fit'>
                <Link className={`inline-block w-full px-3 py-2 text-center ${montserrat.className}`} href='/price'>
                  News
                </Link>
              </li>
              <li className='w-1/2 md:w-fit'>
                <Link className={`inline-block w-full px-3 py-2 text-center ${montserrat.className}`} href='/price'>
                  Price
                </Link>
              </li>
              <li className='w-1/2 md:w-fit'>
                <Link className={`inline-block w-full px-3 py-2 text-center ${montserrat.className}`} href='/contact'>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-10 md:mt-16 md:flex md:items-center md:justify-between'>
          <div className=''>
            <SnsIcons />
          </div>
          <div className='mt-3 flex justify-center'>
            <span className='sm:text-center'>©NeBonga</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
