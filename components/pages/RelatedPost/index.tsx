import Image from 'next/image'
import Link from 'next/link'

import { Post } from '@/typs/types'

type RelatedPostProps = {
  relatedPosts: Post[] | undefined
  slug: string
}

export default function RelatedPost({ relatedPosts, slug }: RelatedPostProps) {
  return (
    <ul className='grid gap-4 md:grid-cols-3 lg:grid-cols-4'>
      {relatedPosts?.map((item: Post) => {
        return (
          <li key={item.slug}>
            <Link href={`/${slug}/${item.slug}/`} className='group'>
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
  )
}
