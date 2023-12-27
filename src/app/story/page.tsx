'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import GET_STORIES from '@/graphql/getStoriesQuery'

import PageTitle from '../components/PageTItle'
import SideNav from '../components/SideNav'
import Story from '../types/story'
import formatDate from '../util/formatDate'

export default function PostList() {
  const [posts, setPosts] = useState<Story[] | null>(null)
  useEffect(() => {
    const query = GET_STORIES
    fetch('https://wp.nebonga.com/graphql', {
      body: JSON.stringify({ query }),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    })
      .then((res) => res.json())
      .then((json) => {
        setPosts(json.data.posts.nodes)
      })
      .catch((error) => {
        console.error('エラー:', error)
      })
  }, [])

  return (
    <main>
      <div className='container relative mx-auto px-3'>
        <section>
          <PageTitle title='コラム' subtitle='Story' />
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>
              <ul className='gap-6 md:grid md:grid-cols-2'>
                {posts?.map((post) => (
                  <li key={post.slug}>
                    <Link href={`/story/${post.slug}`}>
                      <div className='relative aspect-video h-auto w-full'>
                        <Image
                          src={post.featuredImage?.node?.sourceUrl || '/images/image-placeholder.png'}
                          alt={post.featuredImage?.node?.altText}
                          className='rounded-md object-cover'
                          width={640}
                          height={396}
                        />
                      </div>
                      <div className='mt-2'>
                        <p className='text-sm text-gray-500'>{formatDate(post.date)}</p>
                        <h3 className='mt-2 text-xl font-semibold'>{post.title}</h3>
                        <p className='mt-2 text-sm text-gray-500'>
                          {post.categories.nodes.map((category) => (
                            <span key={category.name} className='inline-block rounded-md bg-slate-200 p-2 px-3 text-xs'>
                              {category.name}
                            </span>
                          ))}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className='md:ml-8 md:w-full md:max-w-xs md:flex-auto'>
              <SideNav />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
