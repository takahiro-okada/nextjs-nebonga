import type { Metadata } from 'next'

import PostDetail from '@/components/pages/PostDetail'
import getPostBySlug from '@/libs/queries/getPostBySlug'
import getRelatedPost from '@/libs/queries/getRelatedPost'

export async function generateMetadata(props: { params: Promise<{ slug: string }> }): Promise<Metadata | null> {
  const params = await props.params;
  // Get the page.
  const post = await getPostBySlug(params.slug, 'post')
  const imageUrl = post?.featuredImage?.node?.sourceUrl

  // No post? Bail...
  if (!post) {
    return {}
  }

  return {
    title: `NeBonga | Videography&Photography - ${post.title}`,
    description:
      '株式会社NeBonga（ネボンガ）は、企業/団体向けのあらゆる企画・撮影・演出・編集をワンストップで行うプロダクションです。',
    openGraph: {
      images: [imageUrl],
    },
  }
}

export default async function Post(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  // Fetch a single post from WordPress.
  const post = await getPostBySlug(params.slug, 'post')
  const categoryData = post['categories']
  const categories = categoryData?.nodes ? categoryData.nodes : []
  const categoryIds = categories.map((category) => category.databaseId)
  const categorySlug = 'story'
  const relatedPosts = await getRelatedPost(categoryIds, categorySlug)

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <p>Check the slug and try again.</p>
      </div>
    )
  }
  return <PostDetail post={post} slug='story' categoryKey='categories' relatedPosts={relatedPosts} />
}
