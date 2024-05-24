import type { Metadata } from 'next'

import CommonContainer from '@/components/base/CommonContainer'
import { RenderNewsList,RenderPostList } from '@/components/pages/RenderList'
import { PAGE_SIZE } from '@/libs/constants'
import { fetchData } from '@/libs/fetchData'
import { Post } from '@/typs/types'

export async function generateMetadata({
  params,
}: {
  params: { page: string; slug: string }
}): Promise<Metadata | null> {
  const slug = params.slug
  const title = slug.charAt(0).toUpperCase() + slug.slice(1)

  return {
    title: `NeBonga | ${title}`,
    description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
  }
}

export default async function Archive({ params }: { params: { page: string; slug: string } }) {
  const slug = params.slug
  const page = parseInt(params.page, 10) || 1

  const data = await fetchData(slug, (page - 1) * PAGE_SIZE, PAGE_SIZE)

  if (!data) {
    throw new Error('Failed to fetch data')
  }

  const { basePath, categoryKey, context, posts, subtitle, total } = data as {
    basePath: string
    categoryKey: 'newsCategories'
    categoryName: string
    context: string
    posts: Post[]
    subtitle: string
    total: number
  }

  const totalPages = Math.ceil(total / PAGE_SIZE)

  if (slug === 'story' || slug === 'works') {
    return (
      <main className='mt-32'>
        <CommonContainer>
          <section>
            {posts && posts.length > 0 ? (
              <RenderPostList
                posts={posts}
                title={context}
                subtitle={subtitle}
                basePath={basePath}
                total={total}
                categoryKey={categoryKey}
                categoryName='All'
                currentPage={page}
              />
            ) : (
              <p>No Posts found.</p>
            )}
          </section>
        </CommonContainer>
      </main>
    )
  } else if (slug === 'news') {
    return (
      <main className='mt-32'>
        <CommonContainer>
          <section>
            {posts && posts.length > 0 ? (
              <RenderNewsList posts={posts} categoryKey={categoryKey} currentPage={page} total={total} />
            ) : (
              <p>No Posts found.</p>
            )}
          </section>
        </CommonContainer>
      </main>
    )
  } else {
    return (
      <main className='mt-32'>
        <CommonContainer>
          <section>
            <h1>No page</h1>
          </section>
        </CommonContainer>
      </main>
    )
  }
}
