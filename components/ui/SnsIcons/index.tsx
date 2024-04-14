import Image from 'next/image'

interface SnsIconsProps {
  className?: string
}

export default function SnsIcons({ className = 'w-8' }: SnsIconsProps) {
  return (
    <ul className='flex justify-center gap-4'>
      <li>
        <a target='_blank' href='https://www.youtube.com/@nebongainc.'>
          <Image
            src='/images/icon-youtube-black.svg'
            alt='Youtube'
            width={32}
            height={32}
            className={`h-full ${className} rounded-xl`}
          />
        </a>
      </li>
      <li>
        <a
          target='_blank'
          href='https://www.instagram.com/hiro_kawasaki0610?fbclid=IwAR1pRgvw4mYHUXLAA-iTwIyQ-xyfx4mBg1jOfD-_uoWAeQTPg0GA7VqNYWI_aem_AYOgu6mjK9P6HeiGhWJXXLp766ycONbY01TghWWs12FutHxSxx5dYJqoWXUqZg8wpsCHWx4cifvECRhpwBvfyiBq'
        >
          <Image
            src='/images/icon-instagram-black.svg'
            alt='Instagram'
            width={32}
            height={32}
            className={`h-full ${className} rounded-xl`}
          />
        </a>
      </li>
      <li>
        <a target='_blank' href='https://twitter.com/hiro_works0610'>
          <Image
            src='/images/icon-x-black.svg'
            alt='x'
            width={32}
            height={32}
            className={`h-full ${className} rounded-xl`}
          />
        </a>
      </li>
      <li>
        <a target='_blank' href='https://www.facebook.com/yoshihiro.kawasaki.94'>
          <Image
            src='/images/icon-facebook-black.svg'
            alt='Facebook'
            width={32}
            height={32}
            className={`h-full ${className} rounded-xl`}
          />
        </a>
      </li>
    </ul>
  )
}
