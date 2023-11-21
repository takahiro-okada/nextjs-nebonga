'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import PageMainVisual from '../components/PageMainVIsual'
import SideNav from '../components/SideNav'
import formatDate from '../util/formatDate'

export default function NewsList() {
  const [news, setNews] = useState<any[] | null>(null)

  useEffect(() => {
    const query = `query AllNews {
      newsList {
        edges {
          node {
            id
            content
            title
            slug
            date
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
        setNews(json.data.newsList.edges)
      })
      .catch((error) => {
        console.error('エラー:', error)
      })
  }, [])

  return (
    <main>
      <PageMainVisual title='Story' bgImage='/images/bg-sample.jpg' />
      <div className='mt-8 grid grid-cols-3 gap-4'>
        <section className='col-span-2'>
          {news &&
            news.map((newsItem) => (
              <article key={newsItem.node.id} className='mb-4 bg-white p-4'>
                <Link href={`/news/${newsItem.node.slug}`} className='flex align-middle'>
                  <time dateTime={newsItem.node.date}>{formatDate(newsItem.node.date)}</time>
                  <div>Category</div>
                  <h3 className='text-xl'>{newsItem.node.title}</h3>
                </Link>
              </article>
            ))}
        </section>
        <div className='col-span-1'>
          <SideNav />
        </div>
      </div>
    </main>
  )
}
