import React from 'react'

// Timeline コンポーネントのProps型定義
interface TimelineItem {
  year: string
  event: string
}

interface TimelineProps {
  data: TimelineItem[]
}

// Timeline コンポーネント（名前付きエクスポート）
export const Timeline: React.FC<TimelineProps> = ({ data }) => {
  return (
    <table className='table-fixed align-top leading-[1.8]'>
      {data.map((item, index) => (
        <tr key={index}>
          <td className='w-1/6 align-baseline'>{item.year}</td>
          <td className='w-5/6'>{item.event}</td>
        </tr>
      ))}
    </table>
  )
}

interface ProfileSectionProps {
  name: string
  englishName: string
  descriptionJa: string | string[]
  descriptionEn: string | string[]
  imageSrc: string
  timeline: TimelineItem[]
}

// ProfileSection コンポーネント（デフォルトエクスポート）
const ProfileSection: React.FC<ProfileSectionProps> = ({
  name,
  englishName,
  descriptionJa,
  descriptionEn,
  imageSrc,
  timeline,
}) => {
  return (
    <div className='md:flex md:flex-row md:gap-16'>
      <img src={imageSrc} alt={`${name}のプロフィール写真`} width={481} height={321} className='w-full md:hidden' />
      <div className='mt-6 md:w-1/2'>
        <h2 className='text-4xl font-bold'>{name}</h2>
        <p className='mt-2'>{englishName}</p>
        <p
          className='mt-6 text-sm leading-relaxed tracking-wide'
          dangerouslySetInnerHTML={{ __html: descriptionJa }}
        ></p>
        <p
          className='mt-6 text-sm leading-relaxed tracking-wide font-lato'
          dangerouslySetInnerHTML={{ __html: descriptionEn }}
        ></p>
      </div>
      <div className='mt-6 md:mt-0 md:w-1/2'>
        <img
          src={imageSrc}
          alt={`${name}のプロフィール写真`}
          width={481}
          height={321}
          className='w-full hidden md:block'
        />
        <div className='mt-3'>
          <Timeline data={timeline} />
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
