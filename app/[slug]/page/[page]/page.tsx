import type { Metadata } from 'next'

import CommonContainer from '@/components/base/CommonContainer'
import SideNav from '@/components/base/SideNav'
import ContentList from '@/components/pages/ContentList'
import NewsArticle from '@/components/pages/NewsArticle'
import PageTitle from '@/components/ui/PageTItle'
import getAllNews from '@/libs/queries/getAllNews'
import getAllStories from '@/libs/queries/getAllStories'
import getAllWorks from '@/libs/queries/getAllWorks'
import { Post } from '@/typs/types'

export async function generateMetadata({
  params,
}: {
  params: { slug: string; page: string }
}): Promise<Metadata | null> {
  const slug = params.slug
  const title = slug.charAt(0).toUpperCase() + slug.slice(1)

  return {
    title: `NeBonga | ${title}`,
    description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
  }
}

async function fetchData(slug: string, page: number) {
  const offset = (page - 1) * 9
  const size = 9

  try {
    if (slug === 'story') {
      const { posts, total } = await getAllStories(offset, size)
      return {
        basePath: 'story',
        categoryKey: 'categories',
        context: 'Story',
        posts,
        subtitle: '感じたことなどを綴ります',
        total,
      }
    }

    if (slug === 'works') {
      const { posts, total } = await getAllWorks(offset, size)
      return {
        basePath: 'works',
        categoryKey: 'worksCategories',
        context: 'Works',
        posts,
        subtitle: 'NeBongaのお仕事の一部をご紹介します',
        total,
      }
    }

    if (slug === 'news') {
      const { posts, total } = await getAllNews(offset, size)
      return {
        basePath: 'news',
        categoryKey: 'newsCategories',
        context: 'News',
        posts,
        subtitle: '各種お知らせ',
        total,
      }
    }
  } catch (error) {
    console.error(error)
    return { error: 'データの取得中にエラーが発生しました。' }
  }
}

function RenderPostList({
  title,
  basePath,
  categoryKey,
  categoryName,
  posts,
  subtitle,
  total,
  currentPage,
}: {
  title: string
  basePath: string
  categoryKey: 'categories' | 'worksCategories' | 'newsCategories'
  categoryName: string
  posts: Post[]
  subtitle: string
  total: number
  currentPage: number
}) {
  const totalPages = Math.ceil(total / 9)

  return (
    <>
      <PageTitle title={title} subtitle={subtitle} />
      <div className='mt-8 md:flex'>
        <div className='flex-auto'>
          <ContentList items={posts} basePath={basePath} categoryKey={categoryKey} total={total} categoryName='ALL' />
          <Pagination currentPage={currentPage} totalPages={totalPages} basePath={basePath} />
        </div>
        <div className='mt-16 md:ml-8 md:mt-0 md:w-full md:max-w-xs md:flex-auto'>
          <SideNav linkPrefix={basePath} categoryKey={categoryKey} />
        </div>
      </div>
    </>
  )
}

function RenderNewsList({
  categoryKey,
  posts,
  currentPage,
}: {
  categoryKey: 'newsCategories'
  posts: Post[]
  currentPage: number
}) {
  const totalPages = Math.ceil(posts.length / 9)

  return (
    <>
      <PageTitle title='News' subtitle='各種お知らせ' />
      <div className='mt-8 md:flex'>
        <div className='flex-auto'>
          {posts && posts.map((post, index) => <NewsArticle key={post.databaseId} post={post} index={index} />)}
          <Pagination currentPage={currentPage} totalPages={totalPages} basePath='news' />
        </div>
        <div className='mt-16 md:ml-8 md:mt-0 md:w-full md:max-w-xs md:flex-auto'>
          <SideNav linkPrefix='news' categoryKey={categoryKey} />
        </div>
      </div>
    </>
  )
}

const Pagination = ({ currentPage, totalPages, basePath }) => {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <div className='pagination'>
      {pages.map((page) => (
        <a key={page} href={`/${basePath}/page/${page}`} className={currentPage === page ? 'active' : ''}>
          {page}
        </a>
      ))}
    </div>
  )
}

export default async function Archive({ params }: { params: { slug: string; page: string } }) {
  const slug = params.slug
  const page = parseInt(params.page, 10) || 1

  const data = await fetchData(slug, page)

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

  if (slug == 'story' || slug == 'works') {
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
  } else if (slug == 'news') {
    return (
      <main className='mt-32'>
        <CommonContainer>
          <section>
            {posts && posts.length > 0 ? (
              <RenderNewsList posts={posts} categoryKey={categoryKey} currentPage={page} />
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
