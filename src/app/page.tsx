import Header from './Header'

type Post = {
  node: { title: string; id: string; content: string }
}

export default async function Home() {
  const query = `query NewQuery {
    posts {
      edges {
        node {
          title
          id
          content
        }
      }
    }
  }`

  const posts = await fetch('https://hirokawasaki-works.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
    next: { revalidate: 10 },
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error('HTTPエラー ' + res.status)
      }
      return res.json()
    })
    .then((json) => {
      return json.data.posts.edges
    })
    .catch((error) => {
      console.error('エラー: ' + error.message)
    })

  return (
    <main>
      <Header />
      {posts.map((post: Post, i: number) => {
        console.log(post)
        return (
          <div key={i}>
            <div>{post.node.title}</div>
            <div>{post.node.id}</div>
            <div dangerouslySetInnerHTML={{ __html: post.node.content }}></div>
          </div>
        )
      })}
    </main>
  )
}
