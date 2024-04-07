'use client'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState } from 'react'

import createCategoryHierarchy from '@/app/components/util/createCategoryHierarchy'
import getAllCategories from '@/lib/queries/getAllCategories'
import { Category } from '@/lib/types'

type SideNavProps = {
  categoryKey: string
  linkPrefix: string
}

export default function SideNav({ categoryKey, linkPrefix }: SideNavProps) {
  const [categories, setCategories] = useState<(Category & { children: Category[] })[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const result: Category[] = await getAllCategories(categoryKey)
      if (result) {
        const hierarchy = createCategoryHierarchy(result)
        setCategories(hierarchy)
      }
    }
    fetchData()
  }, [categoryKey])

  const renderCategory = (category: Category & { children: Category[] }) => (
    <li key={category.id}>
      <a
        href={`/${linkPrefix}/category/${category.slug}/`}
        className='inline-block w-full border-b-DEFAULT p-3 font-bold transition-all duration-700 ease-out hover:rounded-md'
      >
        {category.name}
      </a>
      {category.children && category.children.length > 0 && (
        <ul>
          {category.children.map((child) => (
            <li key={child.id}>
              <a
                href={`/${linkPrefix}/category/${category.slug}/${child.slug}`}
                className='inline-block w-full border-b-DEFAULT py-3 pl-8 transition-all duration-700 ease-out hover:rounded-md'
              >
                {child.name}
                <FontAwesomeIcon className='ml-2' icon={faChevronRight} size='xs' />
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )

  return (
    <aside className='w-full bg-[#F5F6F7] p-5'>
      <ul>
        <li>
          <a
            key={'all'}
            href={`/${linkPrefix}/`}
            className='inline-block w-full border-b-DEFAULT p-3 font-Montserrat font-bold transition-all duration-700 ease-out hover:rounded-md'
          >
            ALL
          </a>
        </li>
        {categories.length > 0 ? categories.map(renderCategory) : <p>Loading categories...</p>}
      </ul>
    </aside>
  )
}
