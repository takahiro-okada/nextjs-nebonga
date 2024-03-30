import { fetchGraphQL } from '../functions'

// クエリ構築のロジックを専用の関数に抽出
function buildQuery(category: string, lastSlug: string, limit: number): string {
  const baseFields = `
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
  `

  switch (category) {
    case 'story':
      return `
        query getCategoryBySlug {
          posts(where: {categoryName: "${lastSlug}"}, first: ${limit}) {
            nodes {
              ${baseFields}
            }
            pageInfo {
              offsetPagination {
                total
              }
            }
          }
        }
      `
    case 'works':
    case 'news':
      const categoryField = category === 'works' ? 'worksCategories' : 'newsCategories'
      return `
        query getCategoryBySlug {
          ${category}(where: {
            taxQuery: {
              taxArray: [
                {
                  terms: ["${lastSlug}"],
                  taxonomy: ${category.toUpperCase() + 'CATEGORY'},
                  operator: IN,
                  field: SLUG
                }
              ]
            }
          }, first: ${limit}) {
            nodes {
              ${baseFields.replace('categories', categoryField)}
            }
            pageInfo {
              offsetPagination {
                total
              }
            }
          }
        }
      `
    default:
      throw new Error(`Unsupported category: ${category}`)
  }
}

export default async function getCategoryBySlug(slug: [string, string] | string, limit = 10, category = 'story') {
  const slugs = Array.isArray(slug) ? slug : [slug]
  const lastSlug = slugs.at(-1) || '' // モダンなJavaScriptの機能を使用

  const query = buildQuery(category, lastSlug, limit)
  const variables = {}
  const response = await fetchGraphQL(query, variables)

  const dataPath = category === 'story' ? 'posts' : category
  const nodes = response.data[dataPath].nodes
  const total = response.data[dataPath].pageInfo.offsetPagination.total

  return {
    nodes,
    total,
  }
}
