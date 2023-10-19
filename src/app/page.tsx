'use client'
import { useState, useEffect } from 'react'
import Header from './Header'

type Post = {
  node: { title: string; id: string; content: string }
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
          }
        }
      }
    }`

    fetch('https://hirokawasaki-works.com/graphql', {
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
      {posts.map((post, i) => (
        <div key={i}>
          <div>{post.node.title}</div>
          <div>{post.node.id}</div>
          <div dangerouslySetInnerHTML={{ __html: post.node.content }}></div>
        </div>
      ))}
    </main>
  )
}
