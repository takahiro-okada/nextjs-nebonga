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
  return response.data.newslist.nodes as Post[]
}
