import { Category } from '@/lib/types'

interface CategoryItemProps {
  category: {
    name: string
    children: Category[]
    slug: string
  }
  linkPrefix: string
}

export default function CategoryItem({ category, linkPrefix }: CategoryItemProps) {
  return (
    <li key={category.slug}>
      <a
        href={`/${linkPrefix}/${category.slug}`}
        className='inline-block w-full border-b-DEFAULT py-3 pl-8 transition-all duration-700 ease-out hover:rounded-md hover:bg-gray'
      >
        - {category.name}
      </a>
      {/* {category.children && category.children.length > 0 && (
        <ul>
          {category.children.map((child) => (
            <CategoryItem
              key={child.slug}
              category={{ ...child, children: child.children || [] }}
              linkPrefix={linkPrefix}
            />
          ))}
        </ul>
      )} */}
    </li>
  )
}
