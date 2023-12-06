'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import Works from '@/app/types/works'

import { Button } from '..'
import { SectionTitle } from '../SectionTitle'

export default function CardImage() {
  const [works, setWorks] = useState<Works[] | null>(null)

  useEffect(() => {
    const query = `query GetWorks {
      works(first: 6) {
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

  return (
    <section className='container mx-auto mt-16 px-3'>
      <SectionTitle title='制作したもの' subtitle='Projects' />
      <div className='mt-8'>
        <ul className='gap-6 md:grid md:grid-cols-3'>
          {works?.map((work) => (
            <li key={work.slug} className='group'>
              <Link href={`/works/${work.slug}`}>
                <div className='relative aspect-video h-auto w-full overflow-hidden'>
                  <div className='absolute left-0 top-0 z-10 h-full w-full rounded-xl bg-black opacity-30'></div>
                  <Image
                    src={work.featuredImage?.node?.sourceUrl || '/images/image-placeholder.png'}
                    alt={work.featuredImage?.node?.altText || ''}
                    width={640}
                    height={300}
                    className='rounded-md object-cover transition-transform duration-300 group-hover:scale-110'
                  />
                  <h3 className='absolute bottom-0 z-10 mt-2 px-5 py-4 font-semibold text-white'>{work.title}</h3>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className='mt-14 text-center'>
        <Button href='/works'>もっと見る</Button>
      </div>
    </section>
  )
}
