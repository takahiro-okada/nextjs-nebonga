import type { MetadataRoute } from 'next'

import getAllNews from '@/libs/queries/getAllNews'
import getAllStories from '@/libs/queries/getAllStories'
import getAllWorks from '@/libs/queries/getAllWorks'

export default async function sitemap() {
  const baseUrl = 'https://nebonga.com'
  const allWorks = await getAllWorks(0, 999)
  const allNews = await getAllNews(0, 999)
  const allStories = await getAllStories(0, 999)
  const allWorksPath = allWorks.posts
  const allNewsPath = allNews.posts
  const allStoriesPath = allStories.posts

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
