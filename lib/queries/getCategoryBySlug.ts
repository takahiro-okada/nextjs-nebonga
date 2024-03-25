import { fetchGraphQL } from '../functions'

/**
 * Fetch a category archive by slug.
 */
export default async function getCategoryBySlug(slug: [string, string] | string, limit = 10, category = 'story') {
  const slugs = Array.isArray(slug) ? slug : [slug]
  const lastSlug = slugs.length > 0 ? slugs[slugs.length - 1] : ''
  console.log(lastSlug)
  let query = ''

  // カテゴリに応じてGraphQLクエリを構築
  if (category === 'story') {
    query = `
    query getCategoryBySlug {
      posts(where: {categoryName: "${lastSlug}"}, first: ${limit}) {
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
        pageInfo {
          offsetPagination {
            total
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
        }, first: ${limit}) {
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
          pageInfo {
            offsetPagination {
              total
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
        }, first: ${limit}) {
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
          pageInfo {
            offsetPagination {
              total
            }
          }
        }
      }`
  }

  const variables = {}

  const response = await fetchGraphQL(query, variables)

  // カテゴリに応じたレスポンスデータを構造化して返す
  let nodes, total
  if (category === 'story') {
    nodes = response.data.posts.nodes
    total = response.data.posts.pageInfo.offsetPagination.total
  } else if (category === 'works') {
    nodes = response.data.works.nodes
    total = response.data.works.pageInfo.offsetPagination.total
  } else if (category === 'news') {
    nodes = response.data.newslist.nodes
    total = response.data.newslist.pageInfo ? response.data.newslist.pageInfo.offsetPagination.total : 0 // newslistのレスポンスにpageInfoが含まれない場合のための条件付きアクセス
  }

  // ノードと総件数を含むオブジェクトを返す
  return {
    nodes,
    total,
  }
}
