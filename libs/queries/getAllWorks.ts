import { fetchGraphQL } from '../functions'
import { Post } from '../../typs/types'

export default async function getAllWorks(limit: number = 10) {
  const query = `query GetAllWorks($limit: Int) {
    works(where: {status: PUBLISH}, first: $limit) {
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

  const response = await fetchGraphQL(query, { limit })

  const posts = response.data.works.nodes as Post[]
  const total = response.data.works.pageInfo.offsetPagination.total

  return {
    posts,
    total,
  }
}
