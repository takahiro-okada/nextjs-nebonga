'use client'
import { useEffect, useState } from 'react'

import { fetchStoryDetail } from '../../api/fetchStoryDetail'
import Story from '../../types/story'

export default function StoryDetail({ params }: { params: { slug: string } }) {
  const [story, setStory] = useState<Story | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const slugArray = location.pathname.split('/story/')
    if (slugArray.length !== 2) {
      setError('Invalid URL format.')
      return
    }

    const slug = decodeURIComponent(slugArray[1])

    fetchStoryDetail(slug)
      .then((story) => {
        setStory(story)
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
      <h1>{story?.node.title}</h1>
    </main>
  )
}
