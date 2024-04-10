import PostDetail from '@/components/pages/PostDetail'
import getPostBySlug from '@/libs/queries/getPostBySlug'

export default async function Post({ params }: { params: { slug: string } }) {
  // Fetch a single post from WordPress.
  const post = await getPostBySlug(params.slug, 'post')

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <p>Check the slug and try again.</p>
      </div>
    )
  }
  return <PostDetail post={post} slug='story' categoryKey='categories' />
}
