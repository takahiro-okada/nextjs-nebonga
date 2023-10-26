// app/story/[slug].tsx
'use client'
import { useRouter } from 'next/navigation'
import { useState, useEffect } from 'react'

export default function Page({ params }: { params: { slug: string } }) {
  const router = useRouter()
  const [post, setPost] = useState<any>(null)

  useEffect(() => {
    const query = `
      {
        postBy(slug: "${params.slug}") {
          title
          content
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
        setPost(json.data.postBy)
      })
      .catch((error) => {
        console.error('エラー:', error)
      })
  }, [params.slug])

  return (
    <main>
      <h1 className=''>{post?.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post?.content }} />
      <button onClick={() => router.push('/story')}>戻る</button>
    </main>
  )
}
