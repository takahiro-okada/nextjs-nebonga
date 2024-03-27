import getPostBySlug from '@/lib/queries/getPostBySlug'

import PostDetail from '../../components/PostDetail'

export default async function Post({ params }: { params: { slug: string } }) {
  // Fetch a single post from WordPress.
  const post = await getPostBySlug(params.slug, 'works')

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <p>Check the slug and try again.</p>
      </div>
    )
  }

  return <PostDetail post={post} slug='works' categoryKey='worksCategories' />
}
