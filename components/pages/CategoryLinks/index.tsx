import Link from 'next/link'

import { Post } from '@/typs/types'

interface CategoryLinksProps {
  bathPath: string
  categoryKey: 'categories' | 'worksCategories' | 'newsCategories'
  item: Post
}

export default function CategoryLinks({ bathPath, categoryKey, item }: CategoryLinksProps) {
  return (
    <>
      {item[categoryKey] &&
        item[categoryKey]?.nodes
          .sort((a, b) => {
            if (!a.parent && b.parent) return -1
            if (a.parent && !b.parent) return 1
            return 0
          })
          .map((category) => (
            <Link
              key={category.databaseId}
              href={category.parent ? `/${bathPath}/${category.slug}` : `/${bathPath}/`}
              className='inline-block rounded-md bg-grayLight px-3 py-1 text-xs'
            >
              {category.name}
            </Link>
          ))}
    </>
  )
}
