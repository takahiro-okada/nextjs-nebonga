'use client'
import NextImage from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import SideNav from '../components/SideNav'
import formatDate from '../util/formatDate'

export default function Works() {
  const [works, setWorks] = useState<Works[] | null>(null)

  useEffect(() => {
    const query = `query GetWorks {
      works {
        nodes {
          date
          slug
          title
          categories {
            nodes {
              name
            }
          }
          featuredImage {
            node {
              altText
              sourceUrl
            }
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
        setWorks(json.data.works.nodes)
      })
      .catch((error) => {
        console.error('エラー:', error)
      })
  }, [])

  console.log('works')
  console.log(works)

  return (
    <main>
      <div className='container relative mx-auto px-3'>
        <section>
          <h2 className='text-5xl'>Works</h2>
          <p className='mt-3'>NeBongaのお仕事の一部をご紹介します</p>
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>
              <ul className='gap-6 md:grid md:grid-cols-2'>
                {works?.map((work) => (
                  <li key={work.slug}>
                    <Link href={`/works/${work.slug}`}>
                      <div className='relative aspect-video h-auto w-full'>
                        <NextImage
                          src={work.featuredImage?.node?.sourceUrl || '/images/image-placeholder.png'}
                          alt={work.featuredImage?.node?.altText}
                          className='rounded-md object-cover'
                          layout='fill'
                        />
                      </div>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>{formatDate(work.date)}</p>
                        <h3 className='mt-2 text-xl font-semibold'>{work.title}</h3>
                        <p className='mt-2 text-sm text-gray-500'>
                          {work.categories.nodes.map((category) => (
                            <span key={category.name} className='inline-block rounded-md bg-slate-200 p-2 px-3 text-xs'>
                              {category.name}
                            </span>
                          ))}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='md:ml-8 md:w-full md:max-w-xs md:flex-auto'>
              <SideNav />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
