import { fetchGraphQL } from '../functions'
import { Post } from '../types'

export default async function getAllNews() {
  const query = `query GetAllNews {
    newslist(where: {status: PUBLISH}) {
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
