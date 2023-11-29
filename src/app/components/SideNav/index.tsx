'use client'
import { useEffect, useState } from 'react'

import type Categories from '../../types/categories'

export default function SideNav() {
  const [categories, setCategories] = useState<Categories[] | null>(null)
  useEffect(() => {
    const query = `query GetCategories {
      categories {
        edges {
          node {
            id
            name
            slug
            children {
              edges {
                node {
                  id
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }`

    fetch('https://wp.nebonga.com/graphql', {
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        const extractedCategories = json.data.categories.edges.map((edge: any) => edge.node)
        setCategories(extractedCategories)
      })
      .catch((error) => {
        console.error('エラー:', error)
      })
  }, [])

  const renderCategory = (category: Categories) => (
    <li key={category.id}>
      <a href={`categories/${category.slug}`} className='inline-block w-full border-b-2 py-2 hover:underline'>
        {category.name}
      </a>
      {category.children && category.children.edges.length > 0 && (
        <ul className=''>
          {category.children.edges.map((edge: any) => (
            <li key={edge.node.id}>
              <a href={edge.node.slug} className='inline-block w-full border-b-2 py-2 pl-4 hover:underline'>
                - {edge.node.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  )

  return (
    <aside className='w-full'>
      <p className='mb-4 w-full rounded-lg bg-slate-200 p-2 text-xl'>Category</p>
      <ul className='space-y-4'>
        {categories ? (
          categories.map(
            (category) => category.children && category.children.edges.length > 0 && renderCategory(category),
          )
        ) : (
          <p>Loading categories...</p>
        )}
      </ul>

      <div className='mt-8'>
        <p className='mb-4 w-full rounded-lg bg-slate-200 p-2 text-xl'>Recommended</p>
        <ul className='space-y-4'>
          <li key=''>
            <a href='#' className='hover:underline'>
              2023
            </a>
          </li>
          <li key=''>
            <a href='#' className='hover:underline'>
              2022
            </a>
          </li>
          <li key=''>
            <a href='#' className='hover:underline'>
              2021
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}
