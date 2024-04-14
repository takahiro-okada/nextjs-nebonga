// components/ContentList.js
'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import CategoryHierarchy from '@/components/pages/CategoryHierarchy'
import CategoryLinks from '@/components/pages/CategoryLinks'
import SnsIcons from '@/components/ui/SnsIcons'
import useCategoriesHierarchy from '@/hooks/useCategoriesHierachy'
import { Post } from '@/typs/types'
import formatDate from '@/utils/formatDate'

interface ContentListProps {
  basePath: string
  categoryKey: 'categories' | 'worksCategories' | 'newsCategories'
  categoryName: string
  items: Post[]
  total: number
}

export default function ContentList({ basePath, categoryKey, categoryName, items, total }: ContentListProps) {
  const [showMenu, setShowMenu] = useState(false) // メニュー表示状態の管理
  const categories = useCategoriesHierarchy(categoryKey)

  if (!items || items.length === 0) {
    return (
      <div className='my-16'>
        <p>まだ投稿がありません。投稿されるまでの間はSNSを見て楽しんでください。</p>
        <div className='mt-8'>
          <SnsIcons />
        </div>
      </div>
    )
  }

  return (
    <>
      <div className='flex justify-between'>
        <div className='flex items-center'>
          <p className='text-xl capitalize'>{categoryName}</p>
          <span className='ml-4 text-sm'>{total}件</span>
        </div>
        <div className='relative md:hidden'>
          <button className='' onClick={() => setShowMenu(!showMenu)}>
            <Image src='/images/icon-category.svg' alt='Category icon' width={26} height={26} className='ml-4' />
          </button>
          {showMenu && <CategoryHierarchy categories={categories} basePath={basePath} />}
        </div>
      </div>
      <ul className='mt-5 grid gap-y-10 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-16'>
        {items?.map((item) => {
          return (
            <li key={item.slug}>
              <Link href={`/${basePath}/${item.slug}/`} className='group'>
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
                  <p className='text-sm text-gray-500'>{formatDate(item.date)}</p>
                  <h3 className='mt-2 text-xl'>{item.title}</h3>
                </div>
              </Link>
              <div className='mt-4 flex gap-2 text-sm'>
                <CategoryLinks categoryKey={categoryKey} item={item} bathPath={basePath} />
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}
