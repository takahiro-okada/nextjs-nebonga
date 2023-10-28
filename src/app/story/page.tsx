'use client'
import Link from 'next/link'
import { useState, useEffect } from 'react'

type Post = {
  node: {
    title: string
    slug: string
  }
}

export default function PostList() {
  const [posts, setPosts] = useState<Post[] | null>(null)

  useEffect(() => {
    const query = `
      {
        posts {
          edges {
            node {
              title
              slug
            }
          }
        }
      }
    `

    fetch('https://wp.nebonga.com/graphql', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
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
      <h1>記事一覧</h1>
      <ul>
        {posts &&
          posts.map((post) => (
            <li key={post.node.slug}>
              <Link href={`/story/${post.node.slug}`}>{post.node.title}</Link>
            </li>
          ))}
      </ul>
    </main>
  )
}
