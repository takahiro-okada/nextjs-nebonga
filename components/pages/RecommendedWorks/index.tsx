import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import getPickupWorks from '@/libs/queries/getPickupWorks'

export default async function RecommendedWorks() {
  const works = await getPickupWorks(6)

  return (
    <>
      <p className='font-Montserrat text-xl font-bold'>Recommended Works</p>
      <ul className='grid gap-6 mt-6'>
        {works.posts.map((item) => {
          return (
            <li key={item.slug}>
              <Link href={`/works/${item.slug}/`} className='group'>
                <div className='relative aspect-video h-auto w-full overflow-hidden rounded-md'>
                  <div className='absolute left-0 top-0 z-10 size-full bg-black opacity-30'></div>
                  <Image
                    src={item.featuredImage?.node?.sourceUrl || '/images/image-placeholder.jpg'}
                    alt={item.featuredImage?.node?.altText || ''}
                    width={640}
                    height={300}
                    className='aspect-video object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                </div>
                <div className='mt-2'>
                  <h3 className='mt-2 text-xl'>{item.title}</h3>
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
