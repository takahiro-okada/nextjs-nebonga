import { fetchGraphQL } from '../functions'
import { Post } from '../../typs/types'

export default async function getAllNews(offset: number = 0, size: number = 3) {
  const query = `query GetAllNews($offsetPagination: OffsetPagination = {offset: ${offset}, size: ${size}}) {
    newslist(where: {offsetPagination: $offsetPagination, status: PUBLISH}) {
      nodes {
        databaseId
        date
        modified
        title
        slug
        newsCategories {
          nodes {
            name
            slug
          }
        }
        featuredImage {
          node {
            altText
            sourceUrl
            mediaDetails {
                height
                width
            }
          }
        }
      }
      pageInfo {
        offsetPagination {
          total
        }
      }
    }
  }`
  const response = await fetchGraphQL(query)

  const posts = response.data.newslist.nodes as Post[]
  const total = response.data.newslist.pageInfo.offsetPagination.total

  return {
    posts,
    total,
  }
}
