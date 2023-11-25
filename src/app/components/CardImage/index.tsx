'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type Work from '../../types/works'
import { Button } from '..'
import { SectionTitle } from '../SectionTitle'

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
    <section className='container mx-auto mt-16 px-3'>
      <SectionTitle title='制作したもの' subtitle='Projects' />
      <div className='mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
        {works?.map((work) => (
          <Link key={work.node.id} href={`/works/${work.node.slug}`}>
            <div className='relative rounded-xl'>
              <Image
                src={work.node.featuredImage.node.sourceUrl}
                alt={work.node.featuredImage.node.altText}
                width={work.node.featuredImage.node.mediaDetails.width}
                height={work.node.featuredImage.node.mediaDetails.height}
                className='h-full w-full rounded-xl  object-cover'
              />
              <div className='absolute left-0 top-0  h-full w-full rounded-xl bg-black opacity-50'></div>
              <div className='absolute left-0 top-0 flex h-full w-full items-end justify-center p-2'>
                <div className='text-center text-white'>
                  <h3 className='text-sm md:text-lg'>{work.node.title}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className='mt-6 text-center'>
        <Button href='/works'>もっと見る</Button>
      </div>
    </section>
  )
}
