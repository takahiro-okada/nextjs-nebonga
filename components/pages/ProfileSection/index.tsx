'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

interface TimelineItem {
  event: string
  year: string
}

interface TimelineProps {
  data: TimelineItem[]
}

export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <table className='table-fixed align-top text-sm leading-[1.8]'>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <th className='w-11 text-left align-baseline font-normal'>{item.year}</th>
            <td>{item.event}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

interface ProfileSectionProps {
  name: string
  descriptionEn: string | string[]
  descriptionJa: string | string[]
  englishName: string
  imageSrc: string
  timeline: TimelineItem[]
}

const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  descriptionEn,
  descriptionJa,
  englishName,
  imageSrc,
  timeline,
}) => {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.5,
        duration: 0.8,
        ease: 'easeOut',
      }}
    >
      <div className='md:flex md:flex-row md:gap-16'>
        <Image src={imageSrc} alt={`${name}のプロフィール写真`} width={481} height={321} className='w-full md:hidden' />

        <div className='mt-6 md:w-7/12'>
          <h2 className='text-4xl font-bold'>{name}</h2>
          <p className='mt-2'>{englishName}</p>
          <p
            className='mt-6 text-sm leading-relaxed tracking-wide'
            dangerouslySetInnerHTML={{ __html: descriptionJa }}
          ></p>
          <p
            className='mt-6 font-lato text-sm leading-relaxed tracking-wide'
            dangerouslySetInnerHTML={{ __html: descriptionEn }}
          ></p>
        </div>

        <div className='mt-6 md:mt-0 md:w-5/12'>
          <Image
            src={imageSrc}
            alt={`${name}のプロフィール写真`}
            width={481}
            height={321}
            className='hidden w-full md:block'
          />

          <div className='mt-3'>
            <Timeline data={timeline} />
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProfileSection
