'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type Work from '../../types/works'

export default function CardImage() {
  const [works, setWorks] = useState<Work[] | null>(null)

  useEffect(() => {
    const query = `query AllWorks {
      works {
        edges {
          node {
            title
            slug
            id
            featuredImage {
              node {
                altText
                sourceUrl
                mediaDetails {
                  height
                  width
                }
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
        console.log(json)
        setWorks(json.data.works.edges)
      })
      .catch((error) => {
        console.error('エラー:', error)
      })
  }, [])

  return (
    <section className='mt-32'>
      <h2 className='text-xl sm:text-2xl md:text-3xl'>制作したもの</h2>
      <div className='mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
        {works?.map((work) => (
          <Link key={work.node.id} href={`/works/${work.node.slug}`}>
            <div className='relative'>
              <Image
                src={work.node.featuredImage.node.sourceUrl}
                alt={work.node.featuredImage.node.altText}
                width={work.node.featuredImage.node.mediaDetails.width}
                height={work.node.featuredImage.node.mediaDetails.height}
                className='h-full w-full object-cover'
              />
              <div className='absolute left-0 top-0  h-full w-full bg-black opacity-50'></div>
              <div className='absolute left-0 top-0 flex h-full w-full items-center justify-center'>
                <div className='text-center text-white'>
                  <h3 className='text-xl sm:text-2xl md:text-3xl'>{work.node.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='mt-6'>
        <Link href='/story/' className='text-xl sm:text-2xl md:text-3xl'>
          記事一覧ページへ
        </Link>
      </div>
    </section>
  )
}
