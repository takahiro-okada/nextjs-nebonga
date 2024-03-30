'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export function BreadCrumb() {
  const pathname = usePathname()
  let joinedPath = ''

  // If we're on the homepage, don't render breadcrumbs
  if (pathname === '/') return null

  const path = pathname
    .split('/')
    .filter(Boolean)
    .map((path, index) => {
      joinedPath += (index === 0 ? '' : '/') + path
      return {
        name: path,
        path: joinedPath,
      }
    })

  return (
    <div className='mx-3 flex max-w-3xl items-center py-2 text-sm'>
      <Link href='/'>Home</Link>
      {path.map((item, index) => (
        <div key={index}>
          <span className='mx-2'>/</span>
          <Link href={item.path}>{item.name}</Link>
        </div>
      ))}
    </div>
  )
}
