import { Category } from '@/lib/types'

export default function createCategoryHierarchy(categories: Category[]) {
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
