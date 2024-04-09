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
              key={category.slug} // キーの追加が必要です
              href={
                category.parent
                  ? `/${bathPath}/category/${category.parent.node.slug}/${category.slug}`
                  : `/${bathPath}/category/${category.slug}`
              }
              className='inline-block rounded-md bg-grayLight p-2 px-3 text-xs'
            >
              {category.name}
            </Link>
          ))}
    </>
  )
}
