import type { Metadata } from 'next'

import PostDetail from '@/components/pages/PostDetail'
import getPostBySlug from '@/libs/queries/getPostBySlug'
import getRelatedPost from '@/libs/queries/getRelatedPost'

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata | null> {
  // Get the page.
  const post = await getPostBySlug(params.slug, 'news')

  // No post? Bail...
  if (!post) {
    return {}
  }

  return {
    title: `NeBonga | Videography&Photography - ${post.title}`,
    description:
      '株式会社NeBonga（ネボンガ）は、企業/団体向けのあらゆる企画・撮影・演出・編集をワンストップで行うプロダクションです。',
  }
}

export default async function Post({ params }: { params: { slug: string } }) {
  // Fetch a single post from WordPress.
  const post = await getPostBySlug(params.slug, 'news')
  const categoryData = post['newsCategories']
  const categories = categoryData?.nodes ? categoryData.nodes : []
  const categoryIds = categories.map((category) => category.databaseId)
  const categorySlug = 'news'
  const relatedPosts = await getRelatedPost(categoryIds, categorySlug)

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <p>Check the slug and try again.</p>
      </div>
    )
  }

  return <PostDetail post={post} slug='news' categoryKey='newsCategories' relatedPosts={relatedPosts} />
}
