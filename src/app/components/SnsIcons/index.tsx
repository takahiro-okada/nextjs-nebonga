import Image from 'next/image'

export default function SnsIcons() {
  return (
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
          <Image src='/images/icon-x-black.svg' alt='x' width={33} height={33} className='h-full w-8 rounded-xl' />
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
  )
}
