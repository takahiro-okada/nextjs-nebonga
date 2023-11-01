'use client'
import { useState, useEffect } from 'react'
import type Work from '../../types/work'
import { fetchWork } from '../../api/fetchWorkDetail'

export default function WorkDetail() {
  const [work, setWork] = useState<Work | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const slugArray = location.pathname.split('/works/')
    if (slugArray.length !== 2) {
      setError('Invalid URL format.')
      return
    }

    const slug = decodeURIComponent(slugArray[1])

    fetchWork(slug)
      .then((work) => {
        setWork(work)
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
      <h1>Work</h1>

      <section>
        <h2>制作したもの</h2>
        {work && (
          <div>
            <h3>{work.title}</h3>
            <div dangerouslySetInnerHTML={{ __html: work.content }} />
          </div>
        )}
      </section>
    </main>
  )
}
