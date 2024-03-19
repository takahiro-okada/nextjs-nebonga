import { fetchGraphQL } from '../functions'
import { Post } from '../types'

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
            name
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
    }
  }`
  const response = await fetchGraphQL(query, { limit })
  return response.data.works.nodes as Post[]
}
