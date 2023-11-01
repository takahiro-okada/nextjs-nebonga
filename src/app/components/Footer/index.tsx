import Image from 'next/image'

export default function Footer() {
  return (
    <footer className='bg-white mt-5'>
      <div className='w-full max-w-screen-xl mx-auto'>
        <div className='sm:flex sm:items-center sm:justify-between'>
          <a href='https://flowbite.com/' className='flex items-center mb-4 sm:mb-0'>
            <span className='self-center text-2xl font-semibold whitespace-nowrap'>NeBonga</span>
          </a>
          <ul className='flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400'>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6 '>
                About
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6'>
                Privacy Policy
              </a>
            </li>
            <li>
              <a href='#' className='mr-4 hover:underline md:mr-6 '>
                Licensing
              </a>
            </li>
            <li>
              <a href='#' className='hover:underline'>
                Contact
              </a>
            </li>
          </ul>
        </div>
        <span className='block text-sm text-gray-500 sm:text-center dark:text-gray-400'>
          © 2023{' '}
          <a href='https://flowbite.com/' className='hover:underline'>
            NeBonga
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  )
}
