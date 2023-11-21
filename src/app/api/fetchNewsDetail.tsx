const fetchNews = async (slug: string) => {
  const query = `
    query AllNews($slug: ID!) {
      news(id: $slug, idType: SLUG) {
        title
        content
      }
    }
  `

  const variables = {
    slug: slug,
  }

  const res = await fetch('https://wp.nebonga.com/graphql', {
    body: JSON.stringify({ query, variables }),
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'POST',
  })

  const json = await res.json()

  if (!json.data || !json.data.news) {
    console.error('Unexpected API response:', json)
    throw new Error('Failed to fetch news data.')
  }

  return json.data.news
}

export { fetchNews }
