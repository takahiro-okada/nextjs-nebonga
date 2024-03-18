import Image from 'next/image'

import { montserrat } from '../util/fonts'

interface FlowCardProps {
  description: string
  iconImageSrc: string
  number: string
  titleEn: string
  titleJa: string
}

export default function FlowCard({ description, iconImageSrc, number, titleEn, titleJa }: FlowCardProps) {
  return (
    <li className='bg-white px-14 py-10'>
      <div className={`${montserrat} text-[18px]`}>{number}</div>
      <h3 className={`${montserrat} mt-3 text-2xl font-bold`}>{titleEn}</h3>
      <p>{titleJa}</p>
      <Image className='mx-auto mt-6 md:w-[72px]' src={iconImageSrc} alt='' width={100} height={100} />
      <p className='mt-6 text-xs'>{description}</p>
    </li>
  )
}
