'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

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
      <h1>Work</h1>

      <section>
        <h2>制作したもの</h2>
        <div className='grid grid-cols-3 gap-3'>
          {works?.map((work) => (
            <Link href={`/works/${work.node.slug}`} key={work.node.id}>
              <div>
                <Image
                  src={work.node.featuredImage.node.sourceUrl}
                  alt={work.node.featuredImage.node.altText}
                  width={work.node.featuredImage.node.mediaDetails.width}
                  height={work.node.featuredImage.node.mediaDetails.height}
                  className='h-full w-full object-cover'
                />
                <h3>{work.node.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  )
}
