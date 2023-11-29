const fetchAdjacentWorks = async (currentWorkDate: string, offset: number) => {
  const quyer = `query GetAdjacentPosts($date: String!, $offset: Int!) {
    posts(where: { dateQuery: { before: $date }, orderby: { field: DATE, order: DESC } }, first: 1, offset: $offset) {
      edges {
        node {
          title
          slug
        }
      }
    }
  }`

  const variables = {
    date: currentWorkDate,
    offset: offset,
  }

  const res = await fetch('https://your-graphql-endpoint.com/graphql', {
    body: JSON.stringify({ query, variables }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  const json = await res.json()

  // ... エラーハンドリングとデータの返却 ...
}

export { fetchAdjacentWorks }
