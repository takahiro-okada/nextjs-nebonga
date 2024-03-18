import { fetchGraphQL } from '../functions'
import { Post } from '../types'

export default async function getAllWorks() {
  const query = `query GetAllWorks {
    works(where: {status: PUBLISH}) {
      nodes {
        databaseId
        date
        modified
        title
        slug
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
  const response = await fetchGraphQL(query)
  return response.data.works.nodes as Post[]
}
