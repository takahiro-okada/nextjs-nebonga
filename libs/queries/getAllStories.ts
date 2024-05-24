import { fetchGraphQL } from '../functions'
import { Post } from '../../typs/types'

export default async function getAllStories(offset: number = 0, size: number = 3) {
  const query = `query GetAllStories($offsetPagination: OffsetPagination = {offset: ${offset}, size: ${size}}) {
      posts(where: {offsetPagination: $offsetPagination, status: PUBLISH}) {
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
    }
  `

  try {
    const response = await fetchGraphQL(query)
    const posts = response.data.posts.nodes as Post[]
    const total = response.data.posts.pageInfo.offsetPagination.total
    return {
      posts,
      total,
    }
  } catch (error) {
    console.error('Error fetching stories from GraphQL:', error)
    throw new Error('Failed to fetch stories')
  }
}
