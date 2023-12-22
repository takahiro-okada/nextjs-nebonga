import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='mt-10 bg-gray pt-10'>
      <div className='mx-auto max-w-1140 px-3'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <ul className='mb-6 flex flex-wrap items-center justify-center text-sm font-medium sm:mb-0'>
            <li>
              <Link className='px-3 py-2' href='/about'>
                About
              </Link>
            </li>
            <li>
              <Link className='px-3 py-2' href='/works'>
                Works
              </Link>
            </li>
            <li>
              <Link className='px-3 py-2' href='/story'>
                Story
              </Link>
            </li>
            <li>
              <Link className='px-3 py-2' href='/price'>
                Price
              </Link>
            </li>
            <li>
              <Link className='px-3 py-2' href='/contact'>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className='flex justify-center'>
          <a href='/' className='text-xl font-semibold tracking-tight'>
            <Image
              src='/logo.png'
              alt='NeBonga'
              width={100}
              height={100}
              className='h-full w-16 rounded-xl  object-cover'
            />
          </a>
        </div>
        <div className='mt-3 flex justify-center'>
          <span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
            © 2023{' '}
            <a href='https://flowbite.com/' className='hover:underline'>
              NeBonga
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  )
}
