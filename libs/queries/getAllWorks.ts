import { Post } from '../../typs/types'
import { fetchGraphQL } from '../functions'

export default async function getAllWorks(offset: number = 0, size: number = 3) {
  const query = `query GetAllWorks($offsetPagination: OffsetPagination = {offset: ${offset}, size: ${size}}) {
    works(where: {offsetPagination: $offsetPagination, status: PUBLISH}) {
      nodes {
        databaseId
        date
        modified
        title
        slug
        worksCategories {
          nodes {
            databaseId
            name
            slug
            parent {
              node {
                databaseId
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

  try {
    const response = await fetchGraphQL(query)
    const posts = response.data.works.nodes as Post[]
    const total = response.data.works.pageInfo.offsetPagination.total
    return {
      posts,
      total,
    }
  } catch (error) {
    console.error('Error fetching stories from GraphQL:', error)
    throw new Error('Failed to fetch stories')
  }
}
