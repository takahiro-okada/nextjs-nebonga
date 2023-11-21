'use client'
import { useEffect, useState } from 'react'

import PageMainVisual from '@/app/components/PageMainVIsual'
import { SectionTitle } from '@/app/components/SectionTitle'
import SideNav from '@/app/components/SideNav'
import News from '@/app/types/news'

import { fetchNews } from '../../api/fetchNewsDetail'

export default function StoryDetail({ params }: { params: { slug: string } }) {
  const [news, setNews] = useState<News | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const slugArray = location.pathname.split('/news/')
    if (slugArray.length !== 2) {
      setError('Invalid URL format.')
      return
    }

    const slug = decodeURIComponent(slugArray[1])

    fetchNews(slug)
      .then((story) => {
        setNews(story)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <main>
      <PageMainVisual title='News' bgImage='/images/bg-sample.jpg' />

      <section>
        <SectionTitle title='ニュース' subtitle='News' />

        <div className='mt-8 grid grid-cols-3 gap-4'>
          <div className='col-span-2'>
            <div className='grid grid-cols-2 gap-4'>
              {news && (
                <div>
                  <h3>{news.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: news.content }} />
                </div>
              )}
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
