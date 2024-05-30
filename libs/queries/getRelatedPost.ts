import { fetchGraphQL } from '../functions'

export default async function getRelatedPost(relatedPosts: string[], categorySlug: string) {
  const idsString = relatedPosts.map((id) => `"${id}"`).join(', ')

  let query = ''
  let resultField = 'posts'

  switch (categorySlug) {
    case 'works':
      resultField = 'works'
      query = `query getRelatedPostsIds {
        works(where: {taxQuery: {taxArray: {taxonomy: WORKSCATEGORY, terms: [${idsString}], field: ID}}}) {
          nodes {
            databaseId
          }
        }
      }`
      break
    case 'news':
      resultField = 'newslist'
      query = `query getRelatedPostsIds {
        newslist(where: {taxQuery: {taxArray: {taxonomy: NEWSCATEGORY, terms: [${idsString}], field: ID}}}) {
          nodes {
            databaseId
          }
        }
      }`
      break
    default:
      query = `query getRelatedPostsIds {
        posts(where: {categoryIn: [${idsString}]}) {
          nodes {
            databaseId
          }
        }
      }`
      break
  }

  // 全ての関連する投稿のIDを取得
  let response = await fetchGraphQL(query)
  const allPostIds = response.data[resultField].nodes.map((node) => node.databaseId)

  // ランダムに4つのIDを選択
  const selectedIds = selectRandom(allPostIds, 4)
  const selectedIdsString = selectedIds.map((id) => `"${id}"`).join(', ')

  // 選ばれたIDで詳細情報を取得
  query = `query getSelectedPosts {
    posts(where: {in: [${selectedIdsString}]}) {
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

  // 詳細情報を取得
  response = await fetchGraphQL(query)
  return response.data.posts.nodes
}

// ランダムにn個の要素を選ぶ関数
function selectRandom(array, n) {
  const result = new Array(n)
  let len = array.length
  const taken = new Array(len)
  if (n > len) throw new RangeError('selectRandom: more elements taken than available')
  while (n--) {
    const x = Math.floor(Math.random() * len)
    result[n] = array[x in taken ? taken[x] : x]
    taken[x] = --len in taken ? taken[len] : len
  }
  return result
}
