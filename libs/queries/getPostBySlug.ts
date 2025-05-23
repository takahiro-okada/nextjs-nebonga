import { fetchGraphQL } from '@/libs/functions'
import { Post } from '@/typs/types'

export default async function getPostBySlug(encodedSlug: string, postType: string) {
  const slug = decodeURIComponent(encodedSlug)

  let query = ''
  let resultField = ''

  if (postType === 'post') {
    query = `
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
          categories {
            nodes {
              id
              databaseId
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
          next {
            title
            slug
            uri
          }
          previous {
            title
            slug
            uri
          }
        }
      }
    `
    resultField = 'post'
  } else if (postType === 'works') {
    query = `
    query GetPost{
      work(id: "${slug}",idType: SLUG) {
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
        worksCategories {
          nodes {
            databaseId
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
        acf_youtube {
          youtubeUrl
        }
        next {
          title
          slug
          uri
        }
        previous {
          title
          slug
          uri
        }
      }
    }
    `
    resultField = 'work'
  } else if (postType === 'news') {
    query = `
    query GetPost($slug: ID!) {
      news(id: $slug, idType: SLUG) {
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
        newsCategories {
          nodes {
            databaseId
            name
            parent {
              node {
                name
                slug
              }
            }
          }
        }
        next {
          title
          slug
          uri
        }
        previous {
          title
          slug
          uri
        }
      }
    }
    `
    resultField = 'news'
  }

  const variables = { slug }
  const response = await fetchGraphQL(query, variables)
  return response.data[resultField] as Post
}
