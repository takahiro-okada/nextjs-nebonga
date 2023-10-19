'use client'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import Header from './Header'

type Post = {
  node: {
    title: string
    id: string
    content: string
    featuredImage: {
      node: {
        sourceUrl: string
        altText: string
      }
    }
  }
}

export default function Home() {
  const [posts, setPosts] = useState<Post[] | null>(null)

  useEffect(() => {
    const query = `query NewQuery {
      posts {
        edges {
          node {
            title
            id
            content
            featuredImage {
              node {
                sourceUrl
                altText
              }
            }
          }
        }
      }
    }`

    fetch('http://wp.nebonga.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error('HTTPエラー ' + res.status)
        }
        return res.json()
      })
      .then((json) => {
        setPosts(json.data.posts.edges)
      })
      .catch((error) => {
        console.error('エラー: ' + error.message)
      })
  }, [])

  if (!posts) {
    return <div>Loading...</div>
  }

  return (
    <main>
      <Header />

      <div className='grid grid-cols-3 gap-4 mt-24'>
        {posts.map((post) => (
          <div key={post.node.id}>
            {post.node.featuredImage ? (
              <Image
                src={post.node.featuredImage.node.sourceUrl}
                alt={post.node.featuredImage.node.altText}
                className='aspect-video'
                width={500}
                height={300}
              />
            ) : (
              <p>画像がありません</p>
            )}
            <h2>{post.node.title}</h2>
          </div>
        ))}
      </div>
    </main>
  )
}
