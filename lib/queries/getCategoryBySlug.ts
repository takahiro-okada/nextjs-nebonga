// GraphQLクエリをフェッチする関数
import { fetchGraphQL } from '../functions'

// ベースとなるフィールド定義を返す関数
function getBaseFields(): string {
  return `
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
}

// カテゴリに応じたクエリを構築する関数
function buildQuery(category: string, lastSlug: string, limit: number): string {
  const baseFields = getBaseFields()

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
      const postField = category === 'works' ? 'works' : 'newslist'
      const categoryField = category === 'works' ? 'worksCategories' : 'newsCategories'
      return `
        query getCategoryBySlug {
          ${postField}(where: {
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

// カテゴリとスラグからデータを取得するメインの非同期関数
export default async function getCategoryBySlug(slug: [string, string] | string, limit = 10, category = 'story') {
  const slugs = Array.isArray(slug) ? slug : [slug]
  const lastSlug = slugs.at(-1) || ''

  const query = buildQuery(category, lastSlug, limit)

  const response = await fetchGraphQL(query, {})

  const dataPath = category === 'story' ? 'posts' : category === 'works' ? 'works' : 'newslist'
  const nodes = response.data[dataPath].nodes
  const total = response.data[dataPath].pageInfo.offsetPagination.total

  return {
    nodes,
    total,
  }
}
