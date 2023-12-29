'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import GET_NEWS from '@/graphql/getNewsQuery'

import PageTitle from '../components/PageTItle'
import SideNav from '../components/SideNav'
import formatDate from '../util/formatDate'

export default function NewsList() {
  const [news, setNews] = useState<any[] | null>(null)

  useEffect(() => {
    const query = GET_NEWS

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
      <div className='container relative mx-auto px-3'>
        <PageTitle title='ニュース' subtitle='News' />
        <div className='mt-8 md:flex'>
          <div className='flex-auto'>
            {news &&
              news.map((newsItem) => (
                <article key={newsItem.node.id} className='mb-4 border-b-2 bg-white p-4 py-2'>
                  <Link href={`/news/${newsItem.node.slug}`} className='md:flex md:items-start md:align-middle'>
                    <div className='flex'>
                      <time dateTime={newsItem.node.date}>{formatDate(newsItem.node.date)}</time>
                      <div className='ml-4'>
                        <span className='inline-block rounded-md bg-slate-200 p-2 px-3 text-xs'>Category</span>
                      </div>
                    </div>
                    <h3 className='mt-4 text-xl md:ml-4 md:mt-0'>{newsItem.node.title}</h3>
                  </Link>
                </article>
              ))}
          </div>
          <div className='md:ml-8 md:w-full md:max-w-xs md:flex-auto'>
            <SideNav />
          </div>
        </div>
      </div>
    </main>
  )
}
