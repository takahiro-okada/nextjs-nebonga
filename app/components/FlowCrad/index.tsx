import Image from 'next/image'

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
      <div className='font-Montserrat text-[18px]'>{number}</div>
      <h3 className='mt-3 font-Montserrat text-2xl font-bold'>{titleEn}</h3>
      <p>{titleJa}</p>
      <Image className='mx-auto mt-6 md:w-[72px]' src={iconImageSrc} alt='' width={100} height={100} />
      <p className='mt-6 text-xs'>{description}</p>
    </li>
  )
}
