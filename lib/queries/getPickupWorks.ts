import { fetchGraphQL } from '../functions'
import { Post } from '../types'

export default async function getPickupWorks(limit: number = 6) {
  const query = `query GetPickupWorks{
    works(
      where: {taxQuery: {taxArray: {taxonomy: WORKSTAG, terms: "pickup", field: SLUG}}}
    ) {
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
    }
  }`

  const response = await fetchGraphQL(query, { limit })

  const posts = response.data.works.nodes as Post[]

  return {
    posts,
  }
}
