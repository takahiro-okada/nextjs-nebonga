import type { MetadataRoute } from 'next'

import getAllNews from '@/libs/queries/getAllNews'
import getAllStories from '@/libs/queries/getAllStories'
import getAllWorks from '@/libs/queries/getAllWorks'

export default async function sitemap() {
  const baseUrl = 'https://nebonga.com'

  let allWorksPath: { slug: string }[] = []
  let allNewsPath: { slug: string }[] = []
  let allStoriesPath: { slug: string }[] = []

  try {
    const allWorks = await getAllWorks(0, 999)
    allWorksPath = allWorks.posts
  } catch (error) {
    console.error('[sitemap] getAllWorks failed:', error)
  }

  try {
    const allNews = await getAllNews(0, 999)
    allNewsPath = allNews.posts
  } catch (error) {
    console.error('[sitemap] getAllNews failed:', error)
  }

  try {
    const allStories = await getAllStories(0, 999)
    allStoriesPath = allStories.posts
  } catch (error) {
    console.error('[sitemap] getAllStories failed:', error)
  }

  const staticPaths: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
    },
    {
      url: `${baseUrl}/about`,
    },
    {
      url: `${baseUrl}/price`,
    },
    {
      url: `${baseUrl}/works`,
    },
    {
      url: `${baseUrl}/news`,
    },
    {
      url: `${baseUrl}/story`,
    },
    {
      url: `${baseUrl}/contact`,
    },
  ]

  // articles
  const allWorksUrl: MetadataRoute.Sitemap = allWorksPath.map((article) => ({
    url: `${baseUrl}/works/${article.slug}`,
  }))

  const allNewsUrl: MetadataRoute.Sitemap = allNewsPath.map((article) => ({
    url: `${baseUrl}/news/${article.slug}`,
  }))

  const allStoriesUrl: MetadataRoute.Sitemap = allStoriesPath.map((article) => ({
    url: `${baseUrl}/story/${article.slug}`,
  }))

  return [...staticPaths, ...allWorksUrl, ...allNewsUrl, ...allStoriesUrl]
}
