import Link from 'next/link'

import { Post } from '@/typs/types'

interface CategoryLinksProps {
  categoryKey: 'categories' | 'worksCategories' | 'newsCategories'
  item: Post
  slug: string
}

export default function CategoryLinks({ categoryKey, item, slug }: CategoryLinksProps) {
  return (
    <>
      {item[categoryKey] &&
        item[categoryKey]?.nodes
          .sort((a, b) => {
            if (!a.parent && b.parent) return -1
            if (a.parent && !b.parent) return 1
            return 0
          })
          .map((category) => {
            const parentSlug = category.parent ? `${category.parent.node.slug}/` : ''
            console.log(parentSlug)
            return (
              <Link
                key={category.databaseId}
                href={`/${slug}/category/${parentSlug}${category.slug}/`}
                className='inline-block rounded-md bg-grayLight px-3 py-1 text-xs'
              >
                {category.name}
              </Link>
            )
          })}
    </>
  )
}
