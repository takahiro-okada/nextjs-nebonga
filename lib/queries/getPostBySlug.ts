import { fetchGraphQL } from '@/lib/functions'
import { Post } from '@/lib/types'

/**
 * Fetch a single blog post by slug.
 */
export default async function getPostBySlug(slug: string) {
  const query = `
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
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
        tags {
          nodes {
            databaseId
            name
          }
        }
        categories {
          nodes {
            databaseId
            name
          }
        }
        nextPost {
          title
          slug
          uri
        }
        previousPost {
          title
          slug
          uri
        }
      }
    }
  `

  const variables = {
    slug: slug,
  }
  const response = await fetchGraphQL(query, variables)
  console.log('hogehogeog')
  console.log(response)
  return response.data.post as Post
}
