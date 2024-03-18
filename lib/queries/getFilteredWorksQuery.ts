export const GET_FILTERED_WORKS = (categorySlug?: string, subCategorySlug?: string): string => {
  let taxQuery = ''

  if (categorySlug) {
    taxQuery += `
      {
        taxonomy: "worksCategories",
        terms: "${categorySlug}",
        field: "slug",
      }
    `
  }

  if (subCategorySlug) {
    taxQuery += taxQuery ? `,` : ''
    taxQuery += `
      {
        taxonomy: "subcategory",
        terms: "${subCategorySlug}",
        field: "slug",
      }
    `
  }
  console.log('taxQuery:', taxQuery)

  const query = `query GET_FILTERED_WORKS {
    works( where: { taxQuery: [${taxQuery}] } ) {
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
    }
  `
  return query
}
