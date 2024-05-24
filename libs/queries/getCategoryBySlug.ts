// libs/queries/getCategoryBySlug.ts
import { fetchGraphQL } from '../functions'

function getBaseFields(): string {
  return `
    date
    slug
    title
    id
    categories {
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
      }
    }
  `
}

function buildQuery(category: string, slugs: string[], offset: number, limit: number): string {
  const baseFields = getBaseFields()

  // 親子カテゴリの処理
  const parentSlug = slugs.length > 1 ? slugs.slice(0, -1).join('/') : null
  const lastSlug = slugs[slugs.length - 1]

  switch (category) {
    case 'story':
      return `
        query getCategoryBySlug {
          posts(where: {categoryName: "${lastSlug}", offsetPagination: {offset: ${offset}, size: ${limit}}}) {
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
      return `
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
                ${parentSlug ? `, { terms: ["${parentSlug}"], taxonomy: WORKSCATEGORY, operator: IN, field: SLUG }` : ''}
              ]
            },
            offsetPagination: {offset: ${offset}, size: ${limit}}
          }) {
            nodes {
              ${baseFields.replace('categories', 'worksCategories')}
            }
            pageInfo {
              offsetPagination {
                total
              }
            }
          }
        }
      `
    case 'news':
      return `
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
                ${parentSlug ? `, { terms: ["${parentSlug}"], taxonomy: NEWSCATEGORY, operator: IN, field: SLUG }` : ''}
              ]
            },
            offsetPagination: {offset: ${offset}, size: ${limit}}
          }) {
            nodes {
              ${baseFields.replace('categories', 'newsCategories')}
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

export default async function getCategoryBySlug(slugs: string[], offset = 0, limit = 10, category = 'story') {
  const query = buildQuery(category, slugs, offset, limit)

  const response = await fetchGraphQL(query, {})

  const dataPath = category === 'story' ? 'posts' : category === 'works' ? 'works' : 'newslist'
  const nodes = response.data[dataPath].nodes
  const total = response.data[dataPath].pageInfo.offsetPagination.total

  return {
    nodes,
    total,
  }
}
