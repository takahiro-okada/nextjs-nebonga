'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type Work from '../../types/works'

export default function CardImage() {
  const [works, setWorks] = useState<Work[] | null>(null)

  useEffect(() => {
    const query = `query AllWorks {
      works {
        edges {
          node {
            content
            title
            featuredImage {
              node {
                mediaDetails {
                  width
                  height
                }
                sourceUrl
              }
            }
          }
        }
      }
    }
    `

    fetch('https://wp.nebonga.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
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
    <section className='mt-32'>
      <h2 className=''>制作したもの</h2>
      <div className='grid grid-cols-3 gap-4 mt-6'>
        {works?.map((work) => (
          <Link href={`/works/${work.node.slug}`} key={work.node.slug}>
            <div className='relative'>
              <Image
                src={work.node.featuredImage.node.sourceUrl}
                alt={work.node.featuredImage.node.altText}
                width={work.node.featuredImage.node.mediaDetails.width}
                height={work.node.featuredImage.node.mediaDetails.height}
                className='w-full h-full object-cover'
              />
              <div className='absolute top-0 left-0 w-full h-full bg-black opacity-50'></div>
              <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                <div className='text-white text-center'>
                  <h3 className='text-2xl'>{work.node.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='mt-6'>
        <Link href='/story/'>記事一覧ページへ</Link>
      </div>
    </section>
  )
}
