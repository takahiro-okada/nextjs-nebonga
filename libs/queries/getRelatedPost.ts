import { fetchGraphQL } from '../functions'

export default async function getRelatedPost(relatedPosts: string[], categorySlug: string) {
  const idsString = relatedPosts.map((id) => `"${id}"`).join(', ')

  let query = ''
  let resultField = 'posts'

  switch (categorySlug) {
    case 'works':
      resultField = 'works'
      query = `query getRelatedPost {
        works(first: 4, where: {taxQuery: {taxArray: {taxonomy: WORKSCATEGORY, terms: [${idsString}], field: ID}}} ) {
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
      break
    case 'news':
      resultField = 'newslist'
      query = `query getRelatedPost {
        newslist(first: 4, where: {taxQuery: {taxArray: {taxonomy: NEWSCATEGORY, terms: [${idsString}], field: ID}}} ) {
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
      break
    default:
      query = `query getRelatedPost {
        posts(first: 4, where: {categoryIn: [${idsString}]}) {
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
                altTheText
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
      break
  }

  const response = await fetchGraphQL(query)
  return response.data[resultField].nodes
}
