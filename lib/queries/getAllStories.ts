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
  return response.data.posts.nodes as Post[]
}
