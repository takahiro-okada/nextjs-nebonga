'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import PageMainVisual from '../components/PageMainVIsual'
import { SectionTitle } from '../components/SectionTitle'
import SideNav from '../components/SideNav'
import type Work from '../types/works'

export default function Works() {
  const [works, setWorks] = useState<Work[] | null>(null)

  useEffect(() => {
    const query = `query AllWorks {
      works {
        edges {
          node {
            id
            content
            title
            slug
            featuredImage {
              node {
                mediaDetails {
                  width
                  height
                }
                sourceUrl
                altText
              }
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
        setWorks(json.data.works.edges)
      })
      .catch((error) => {
        console.error('エラー:', error)
      })
  }, [])

  return (
    <main>
      <PageMainVisual title='Works' bgImage='/images/bg-sample.jpg' />

      <section className='mt-16'>
        <SectionTitle title='Works' subtitle='制作実績' />
        <div className='mt-8 grid grid-cols-3 gap-4'>
          <div className='col-span-2'>
            <div className='grid grid-cols-2 gap-4'>
              {works &&
                works.map((work) => (
                  <div key={work.node.slug} className='relative overflow-hidden rounded shadow-md'>
                    <Image
                      src={work.node.featuredImage?.node?.sourceUrl || '/images/image-placeholder.png'}
                      alt={work.node.featuredImage?.node?.altText || 'Default Image'}
                      width={work.node.featuredImage?.node?.mediaDetails?.width || 640}
                      height={work.node.featuredImage?.node?.mediaDetails?.height || 480}
                    />
                    <div className='px-6 py-4'>
                      <Link href={`/story/${work.node.slug}`} className='mb-2 text-xl font-bold'>
                        {work.node.title}
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className='col-span-1'>
            <SideNav />
          </div>
        </div>
      </section>
    </main>
  )
}
