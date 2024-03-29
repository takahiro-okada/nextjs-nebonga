import Image from 'next/image'

interface SnsIconsProps {
  className?: string // オプショナルなpropsで、デフォルトはw-8
}

export default function SnsIcons({ className = 'w-8' }: SnsIconsProps) {
  return (
    <ul className='flex justify-center gap-4'>
      <li>
        <a href='/'>
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
        <a href='/'>
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
        <a href='/'>
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
        <a href='/'>
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
