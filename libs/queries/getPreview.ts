import { fetchGraphQL } from '@/libs/functions'
import { Post } from '@/typs/types'

/**
 * Fetch a preview post, work, or news based on the provided ID.
 */
export default async function getPreview(id: string): Promise<Post | null> {
  let query = `
    query PreviewPost($id: ID!) {
      post(id: $id, idType: DATABASE_ID) {
        databaseId
        date
        modified
        content(format: RENDERED)
        title(format: RENDERED)
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
  `

  let variables = {
    id: id,
  }

  let response = await fetchGraphQL(query, variables, true)

  // If response.data.post is null, try fetching a work
  if (!response.data.post) {
    query = `
      query PreviewPost($id: ID!) {
        work(id: $id, idType: DATABASE_ID) {
          databaseId
          date
          modified
          content(format: RENDERED)
          title(format: RENDERED)
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
    `

    response = await fetchGraphQL(query, variables, true)
  }

  // If response.data.work is also null, try fetching news
  if (!response.data.work && !response.data.post) {
    query = `
      query PreviewPost($id: ID!) {
        news(id: $id, idType: DATABASE_ID) {
          databaseId
          date
          modified
          content(format: RENDERED)
          title(format: RENDERED)
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
    `

    response = await fetchGraphQL(query, variables, true)
  }

  // Return the first non-null post, work, or news as Post
  return response.data.post || response.data.work || (response.data.news as Post | null)
}
