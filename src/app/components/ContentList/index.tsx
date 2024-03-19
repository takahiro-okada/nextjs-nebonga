// components/ContentList.js
import Image from 'next/image'
import Link from 'next/link'

import formatDate from '../util/formatDate'
import { Category, Post } from '@/lib/types'

interface ContentListProps {
  basePath: string
  categoryKey: 'categories' | 'worksCategories' | 'newsCategories'
  items: Post[]
}

export default function ContentList({ basePath, categoryKey, items }: ContentListProps) {
  return (
    <>
      <ul className='gap-x-8 gap-y-16 md:grid md:grid-cols-2'>
        {items?.map((item) => {
          console.log(item)
          return (
            <li key={item.slug}>
              <Link href={`/${basePath}/${item.slug}/`}>
                <div className='relative aspect-video h-auto w-full'>
                  <Image
                    src={item.featuredImage?.node?.sourceUrl || '/images/image-placeholder.jpg'}
                    alt={item.featuredImage?.node?.altText || ''}
                    className='rounded-md object-cover'
                    width={640}
                    height={396}
                  />
                </div>
                <div className='mt-2'>
                  <p className='text-sm text-gray-500'>{formatDate(item.date)}</p>
                  <h3 className='mt-2 text-xl font-semibold'>{item.title}</h3>
                  {item[categoryKey] &&
                    item[categoryKey]?.nodes?.map((category: Category) => (
                      <p className='mt-2 flex gap-2 text-sm text-gray-500'>
                        <span key={category.name} className='inline-block rounded-md bg-[#eee] p-2 px-3 text-xs'>
                          {category.name}
                        </span>
                      </p>
                    ))}
                </div>
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
