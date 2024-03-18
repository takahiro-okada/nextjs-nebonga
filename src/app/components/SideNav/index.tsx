'use client'
import getAllCategories from '@/lib/queries/getAllCategories'
import { useEffect, useState } from 'react'
import { Category } from '@/lib/types'

type SideNavProps = {
  linkPrefix: string
  categoryKey: string
}

const createHierarchy = (categories: Category[]) => {
  const categoriesMap: { [key: string]: Category & { children: Category[] } } = {}
  categories.forEach((category) => {
    categoriesMap[category.slug] = { ...category, children: [] }
  })
  categories.forEach((category) => {
    if (category.parent) {
      if (categoriesMap[category.parent.node.slug]) {
        categoriesMap[category.parent.node.slug].children.push(categoriesMap[category.slug])
      }
    }
  })

  const topLevelCategories: (Category & { children: Category[] })[] = Object.values(categoriesMap).filter(
    (category) => !category.parent,
  )

  return topLevelCategories
}

export default function SideNav({ linkPrefix, categoryKey }: SideNavProps) {
  const [categories, setCategories] = useState<(Category & { children: Category[] })[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result: Category[] = await getAllCategories(categoryKey)
      console.log(result, 'result')
      if (result) {
        const hierarchy = createHierarchy(result)
        setCategories(hierarchy)
      }
    }
    fetchData()
  }, [categoryKey])

  const renderCategory = (category: Category & { children: Category[] }) => (
    <>
      <li key={category.slug}>
        <a
          href={`/${linkPrefix}/${category.slug}`}
          className='inline-block w-full border-b-[1px] p-3 hover:bg-gray hover:rounded-md transition-all duration-700 ease-out'
        >
          {category.name}
        </a>
        {category.children && category.children.length > 0 && (
          <ul>
            {category.children.map((child) => (
              <li key={child.slug}>
                <a
                  href={`/${linkPrefix}/${child.slug}`}
                  className='inline-block w-full border-b-[1px] py-3 pl-8 hover:bg-gray hover:rounded-md transition-all duration-700 ease-out'
                >
                  - {child.name}
                </a>
              </li>
            ))}
          </ul>
        )}
      </li>
    </>
  )

  return (
    <aside className='w-full'>
      <p className='mb-4 w-full rounded-lg bg-[#eee] p-2 text-xl'>Category</p>
      <ul>
        <li>
          <a
            href={`/${linkPrefix}`}
            className='inline-block w-full border-b-[1px] p-3 hover:bg-gray hover:rounded-md transition-all duration-700 ease-out'
          >
            ALL
          </a>
        </li>
        {categories.length > 0 ? categories.map(renderCategory) : <p>Loading categories...</p>}
      </ul>
    </aside>
  )
}
