import Image from 'next/image'
import Link from 'next/link'

import getPickupWorks from '@/lib/queries/getPickupWorks'
import { Post } from '@/lib/types'

export default async function PickupWorks() {
  const works = await getPickupWorks()

  return (
    <div>
      <p>Related Works</p>
      <ul className='grid gap-6 md:grid-cols-3'>
        {works.posts.map((work: Post) => (
          <li key={work.slug} className='group'>
            <Link href={`/works/${work.slug}/`}>
              <div className='relative aspect-video h-auto w-full overflow-hidden rounded-md'>
                <div className='absolute left-0 top-0 z-10 size-full bg-black opacity-30'></div>
                <Image
                  src={work.featuredImage?.node?.sourceUrl || '/images/image-placeholder.jpg'}
                  alt={work.featuredImage?.node?.altText || ''}
                  width={640}
                  height={300}
                  className='aspect-video object-cover transition-transform duration-300 group-hover:scale-110'
                />
                <h3 className='absolute bottom-0 z-10 mt-2 px-5 py-4 font-semibold text-white'>{work.title}</h3>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
