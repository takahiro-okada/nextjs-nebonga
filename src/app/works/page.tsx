'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import SideNav from '../components/SideNav'
import type Work from '../types/works'

export default function Works() {
  const [works, setWorks] = useState<Work[] | null>(null)

  useEffect(() => {
    const query = `query GetWorks {
      posts {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
    `

    fetch('https://wp.nebonga.com/graphql', {
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setWorks(json.data.posts.edges)
      })
      .catch((error) => {
        console.error('エラー:', error)
      })
  }, [])

  return (
    <main>
      <div className='container relative mx-auto px-3'>
        <section>
          <h2 className='text-5xl'>Works</h2>
          <p className='mt-3'>NeBongaのお仕事の一部をご紹介します</p>
          <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-3'>
            <ul className='grid grid-cols-1 gap-4 md:grid-cols-2'>
              {works &&
                works.map((work) => (
                  <li className='relative overflow-hidden rounded shadow-md' key={work.node.id}>
                    <Image
                      src={work.node.featuredImage?.node?.sourceUrl || '/images/image-placeholder.png'}
                      alt={work.node.featuredImage?.node?.altText || 'Default Image'}
                      width={work.node.featuredImage?.node?.mediaDetails?.width || 640}
                      height={work.node.featuredImage?.node?.mediaDetails?.height || 480}
                    />
                    <div className='px-6 py-4'>
                      <Link className='mb-2 text-xl font-bold' href={`/story/${work.node.slug}`}>
                        {work.node.title} : {work.node.id}
                      </Link>
                    </div>
                  </li>
                ))}
            </ul>
            <div className='w-full'>
              <SideNav />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
