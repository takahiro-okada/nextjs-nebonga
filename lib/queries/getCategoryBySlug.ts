import { fetchGraphQL } from '../functions'

/**
 * Fetch a category archive by slug.
 */
export default async function getCategoryBySlug(slug: [string, string] | string, limit = 10, category = 'story') {
  const slugs = Array.isArray(slug) ? slug : [slug]
  const lastSlug = slugs.length > 0 ? slugs[slugs.length - 1] : ''

  let query = ''

  if (category === 'story') {
    query = `
      query getCategoryBySlug {
        posts(where: { categoryName: "${lastSlug}" }, first: ${limit}) {
          nodes {
            date
            slug
            title
            id
            categories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }`
  } else if (category === 'works') {
    query = `
      query getCategoryBySlug {
        works(where: {
          taxQuery: {
            taxArray: [
              {
                terms: ["${lastSlug}"],
                taxonomy: WORKSCATEGORY,
                operator: IN,
                field: SLUG
              }
            ]
          }
        }) {
          nodes {
            date
            slug
            title
            id
            worksCategories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }`
  } else if (category === 'news') {
    query = `
      query getCategoryBySlug {
        newslist(where: {
          taxQuery: {
            taxArray: [
              {
                terms: ["${lastSlug}"],
                taxonomy: NEWSCATEGORY,
                operator: IN,
                field: SLUG
              }
            ]
          }
        }) {
          nodes {
            date
            slug
            title
            id
            newsCategories {
              nodes {
                name
              }
            }
            featuredImage {
              node {
                altText
                sourceUrl
              }
            }
          }
        }
      }`
  }

  console.log(query)
  const variables = {}

  const response = await fetchGraphQL(query, variables)
  // カテゴリに応じて正しいデータを返すように変更
  if (category === 'story') {
    return response.data.posts.nodes
  } else if (category === 'works') {
    return response.data.works.nodes
  } else if (category === 'news') {
    console.log(response.data)
    return response.data.newslist.nodes
  }
}
