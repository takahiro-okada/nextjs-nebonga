'use client'
import { useEffect, useState } from 'react'

import { Post } from '@/lib/types'
import { fetchWork } from '@/src/app/api/fetchWorkDetail'

export default function WorkDetail() {
  const [work, setPost] = useState<Post | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const slugArray = location.pathname.split('/works/article/')
    if (slugArray.length !== 2) {
      setError('Invalid URL format.')
      return
    }

    const slug = decodeURIComponent(slugArray[1])

    fetchWork(slug)
      .then((work) => {
        setPost(work)
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
      <section>
        {/* <article className='container prose mx-auto px-3 lg:prose-xl'>
          {work && (
            <div>
              <div className='relative aspect-video h-auto w-full'>
                <NextImage
                  src={work.featuredImage?.node?.sourceUrl || '/images/image-placeholder.jpg'}
                  alt={work.featuredImage?.node?.altText}
                  className='rounded-md object-cover'
                  layout='fill'
                />
              </div>
              <div className='mt-3 text-xs'>{formatDate(work.date)}</div>
              <h1 className='mt-4 text-3xl'>{work.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: work.content }} />
            </div>
          )}

          <div className='mt-8 rounded-xl bg-slate-300 p-7'>
            <p>まずはお気軽にお問い合わせください</p>
            <div className='grid grid-cols-2 gap-5 text-center'>
              <a href='https://lin.ee/6iXVJ5l' className='rounded-full bg-yellow-400 px-4 py-2 font-bold text-white'>
                LINEからお問い合わせ
              </a>
              <a href='https://lin.ee/6iXVJ5l' className='rounded-full bg-yellow-400 px-4 py-2 font-bold text-white'>
                お問い合わせ
              </a>
            </div>
          </div>

          <div className='mt-8 grid grid-cols-2 gap-4'>
            <div className='h-28 bg-slate-300 px-4 py-2 text-left'>
              <a href='#' className=''>
                <div className='text-xs'>2023.10.11</div>
                <p className='text-xs'>
                  ここには投稿のタイトルが入りますここには投稿のタイトルが入りますここには投稿のタイトルが入ります
                </p>
              </a>
            </div>
            <div className='h-28 bg-slate-300 px-4 py-2 text-right'>
              <a href='#' className=''>
                <div className='text-xs'>2023.10.11</div>
                <p className='text-xs'>
                  ここには投稿のタイトルが入りますここには投稿のタイトルが入りますここには投稿のタイトルが入ります
                </p>
              </a>
            </div>
          </div>
        </article> */}
      </section>
    </main>
  )
}
