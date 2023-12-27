'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import PageTitle from '../components/PageTItle'
import SideNav from '../components/SideNav'
import Story from '../types/story'

export default function PostList() {
  const [posts, setPosts] = useState<Story[] | null>(null)

  useEffect(() => {
    const query = `
      {
        posts {
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
        setPosts(json.data.posts.edges)
      })
      .catch((error) => {
        console.error('エラー:', error)
      })
  }, [])

  return (
    <main>
      <PageTitle title='コラム' subtitle='Story' />
      <div className='mt-8 grid grid-cols-3 gap-4'>
        <div className='col-span-2'>
          <div className='grid grid-cols-2 gap-4'>
            {posts &&
              posts.map((post) => (
                <div key={post.node.slug} className='relative overflow-hidden rounded shadow-md'>
                  <Image
                    src={post.node.featuredImage?.node?.sourceUrl || '/images/image-placeholder.png'}
                    alt={post.node.featuredImage?.node?.altText || 'Default Image'}
                    width={post.node.featuredImage?.node?.mediaDetails?.width || 640}
                    height={post.node.featuredImage?.node?.mediaDetails?.height || 480}
                  />
                  <div className='px-6 py-4'>
                    <Link href={`/story/${post.node.slug}`} className='mb-2 text-xl font-bold'>
                      {post.node.title}
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className='col-span-1'>
          <SideNav />
        </div>
      </div>
    </main>
  )
}
