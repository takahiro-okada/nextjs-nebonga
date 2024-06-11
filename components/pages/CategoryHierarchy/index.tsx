import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

import { Category } from '@/typs/types'

type CategoryHierarchyProps = {
  basePath: string
  categories: any[]
}

export default function CategoryHierarchy({ basePath, categories }: CategoryHierarchyProps) {
  return (
    <ul className='absolute right-0 top-8 z-40 w-44 rounded-md bg-white shadow-custom'>
      {categories.map((category) => (
        <li key={category.slug}>
          <Link
            className='inline-block w-full border-b border-grayNormal p-3'
            href={`/${basePath}/category/${category.slug}/`}
          >
            {category.name}
          </Link>
          {category.children.length > 0 && (
            <ul>
              {category.children.map((child: Category) => (
                <li key={child.slug}>
                  <Link
                    className='inline-block w-full border-b border-grayNormal px-5 py-3'
                    href={`/${basePath}/category/${category.slug}/${child.slug}`}
                  >
                    <FontAwesomeIcon className='mr-4' icon={faChevronRight} size='xs' />
                    {child.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  )
}
