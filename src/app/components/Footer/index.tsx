import { montserrat } from '@/app/util/fonts'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mt-10 bg-gray py-10'>
      <div className='mx-auto max-w-1140 px-3'>
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
            <li className='w-1/2'>
              <Link className={`px-3 py-2 text-center inline-block w-full ${montserrat.className}`} href='/about'>
                About
              </Link>
            </li>
            <li className='w-1/2'>
              <Link className={`px-3 py-2 text-center inline-block w-full ${montserrat.className}`} href='/works'>
                Works
              </Link>
            </li>
            <li className='w-1/2'>
              <Link className={`px-3 py-2 text-center inline-block w-full ${montserrat.className}`} href='/story'>
                Story
              </Link>
            </li>
            <li className='w-1/2'>
              <Link className={`px-3 py-2 text-center inline-block w-full ${montserrat.className}`} href='/price'>
                News
              </Link>
            </li>
            <li className='w-1/2'>
              <Link className={`px-3 py-2 text-center inline-block w-full ${montserrat.className}`} href='/price'>
                Price
              </Link>
            </li>
            <li className='w-1/2'>
              <Link className={`px-3 py-2 text-center inline-block w-full ${montserrat.className}`} href='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='mt-10'>
          <ul className='flex justify-center gap-4'>
            <li>
              <a href='/'>
                <Image
                  src='/images/icon-youtube-black.svg'
                  alt='Youtube'
                  width={33}
                  height={33}
                  className='h-full w-8 rounded-xl'
                />
              </a>
            </li>
            <li>
              <a href='/'>
                <Image
                  src='/images/icon-instagram-black.svg'
                  alt='Instagram'
                  width={33}
                  height={33}
                  className='h-full w-8 rounded-xl'
                />
              </a>
            </li>
            <li>
              <a href='/'>
                <Image
                  src='/images/icon-x-black.svg'
                  alt='x'
                  width={33}
                  height={33}
                  className='h-full w-8 rounded-xl'
                />
              </a>
            </li>
            <li>
              <a href='/'>
                <Image
                  src='/images/icon-facebook-black.svg'
                  alt='Facebook'
                  width={33}
                  height={33}
                  className='h-full w-8 rounded-xl'
                />
              </a>
            </li>
          </ul>
        </div>
        <div className='mt-3 flex justify-center'>
          <span className='sm:text-center'>©NeBonga</span>
        </div>
      </div>
    </footer>
  )
}
