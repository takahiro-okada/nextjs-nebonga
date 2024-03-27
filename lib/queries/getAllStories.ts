import { fetchGraphQL } from '../functions'
import { Post } from '../types'

export default async function getAllStories() {
  const query = `query GetAllStories {
    posts(where: {status: PUBLISH}) {
      nodes {
        databaseId
        date
        modified
        title
        slug
        categories {
          nodes {
            id
            name
            slug   
            parent {
              node {
                name
                slug
              }
            }
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

  const posts = response.data.posts.nodes as Post[]
  const total = response.data.posts.pageInfo.offsetPagination.total

  return {
    posts,
    total,
  }
}
