// hooks/useCategoriesHierarchy.js
import { useEffect, useState } from 'react'

import getAllCategories from '@/lib/queries/getAllCategories'
import { Category } from '@/lib/types'

const useCategoriesHierarchy = (categoryKey: string) => {
  const [categories, setCategories] = useState<(Category & { children: Category[] })[]>([])

  useEffect(() => {
    const fetchData = async () => {
      const result: Category[] = await getAllCategories(categoryKey)
      if (result) {
        const hierarchy = createHierarchy(result)
        setCategories(hierarchy)
      }
    }
    fetchData()
  }, [categoryKey])

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

    return Object.values(categoriesMap).filter((category) => !category.parent)
  }

  return categories
}

export default useCategoriesHierarchy
