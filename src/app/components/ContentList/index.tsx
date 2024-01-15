// components/ContentList.js
import Image from 'next/image'
import Link from 'next/link'

import Stories from '@/app/types/story'

import formatDate from '../../util/formatDate'

interface ContentListProps {
  basePath: string
  items: Stories[]
  type: string
}

export default function ContentList({ basePath, items, type }: ContentListProps) {
  return (
    <ul className='gap-6 md:grid md:grid-cols-2'>
      {items?.map((item) => (
        <li key={item.slug}>
          <Link href={`/${basePath}/article/${item.slug}`}>
            <div className='relative aspect-video h-auto w-full'>
              <Image
                src={item.featuredImage?.node?.sourceUrl || '/images/image-placeholder.png'}
                alt={item.featuredImage?.node?.altText}
                className='rounded-md object-cover'
                width={640}
                height={396}
              />
            </div>
            <div className='mt-2'>
              <p className='text-sm text-gray-500'>{formatDate(item.date)}</p>
              <h3 className='mt-2 text-xl font-semibold'>{item.title}</h3>
              <p className='mt-2 text-sm text-gray-500'>
                {item.categories.nodes.map((category: any) => (
                  <span key={category.name} className='inline-block rounded-md bg-slate-200 p-2 px-3 text-xs'>
                    {category.name}
                  </span>
                ))}
              </p>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
