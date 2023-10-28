'use client'
import { useState, useEffect } from 'react'
import type Work from '../../types/work'

const fetchWork = async (slug: string) => {
  const query = `
  query AllWorks($slug: ID!) {
    work(id: $slug, idType: SLUG) {
      title
      content
    }
  }
`

  const variables = {
    slug: slug,
  }

  const res = await fetch('https://wp.nebonga.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query, variables }),
  })

  const json = await res.json()

  // APIのレスポンスをチェック
  if (!json.data || !json.data.work) {
    console.error('Unexpected API response:', json)
    throw new Error('Failed to fetch work data.')
  }

  return json.data.work
}

export default function WorkDetail() {
  const [work, setWork] = useState<Work | null>(null)

  useEffect(() => {
    const slug = decodeURIComponent(location.pathname.split('/works/')[1])
    fetchWork(slug).then((work) => {
      setWork(work)
    })
  }, [])

  return (
    <main>
      <h1>Work</h1>

      <section>
        <h2>制作したもの</h2>
        <div className='grid grid-cols-3 gap-3'>
          {work && (
            <div>
              {/* Uncomment the Image component once you add image details to your GraphQL query */}
              {/* <Image
                src={work.featuredImage.sourceUrl}
                alt={work.featuredImage.altText}
                width={work.featuredImage.mediaDetails.width}
                height={work.featuredImage.mediaDetails.height}
                className='w-full h-full object-cover'
              /> */}
              <h3>{work.title}</h3>
              <div dangerouslySetInnerHTML={{ __html: work.content }} />
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
