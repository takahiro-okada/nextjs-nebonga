import Link from 'next/link'

import getAllNews from '@/lib/queries/getAllNews'
import getAllStories from '@/lib/queries/getAllStories'
import getAllWorks from '@/lib/queries/getAllWorks'
import { Post } from '@/lib/types'
import CommonContainer from '@/app/components/CommonContainer'
import ContentList from '@/app/components/ContentList'
import PageTitle from '@/app/components/PageTItle'
import SideNav from '@/app/components/SideNav'

import formatDate from '@/app/components/util/formatDate'

async function fetchData(slug: string) {
  try {
    if (slug === 'story') {
      const { posts, total } = await getAllStories()
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
      const { posts, total } = await getAllWorks()
      return {
        basePath: 'works',
        categoryKey: 'worksCategories',
        context: 'Works',
        posts,
        subtitle: 'NeBongaのお仕事の一部をご紹介します',
        total, // 追加: 総投稿数
      }
    }

    if (slug === 'news') {
      const { posts, total } = await getAllNews()
      return {
        basePath: 'news',
        categoryKey: 'newsCategories',
        context: 'News',
        posts,
        subtitle: '各種お知らせ',
        total, // 追加: 総投稿数
      }
    }

    if (page) {
      return { post: page }
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
}: {
  title: string
  basePath: string
  categoryKey: 'categories' | 'worksCategories' | 'newsCategories'
  categoryName: string
  posts: Post[]
  subtitle: string
  total: number
}) {
  return (
    <>
      <PageTitle title={title} subtitle={subtitle} />
      <div className='mt-8 md:flex'>
        <div className='flex-auto'>
          <ContentList items={posts} basePath={basePath} categoryKey={categoryKey} total={total} categoryName='ALL' />
        </div>
        <div className='mt-16 md:ml-8 md:mt-0 md:w-full md:max-w-xs md:flex-auto'>
          <SideNav linkPrefix={basePath} categoryKey={categoryKey} />
        </div>
      </div>
    </>
  )
}

function RenderNewsList({ categoryKey, posts }: { categoryKey: 'newsCategories'; posts: Post[] }) {
  return (
    <>
      <PageTitle title='News' subtitle='各種お知らせ' />
      <div className='mt-8 md:flex'>
        <div className='flex-auto'>
          {posts &&
            posts.map((post) => (
              <article key={post.databaseId} className='mb-4 border-b-DEFAULT bg-white'>
                <Link href={`/news/${post.slug}`} className='inline-block py-3 md:flex md:items-start md:align-middle'>
                  <div className='flex content-center'>
                    <time className='inline-block' dateTime={post.date}>
                      {formatDate(post.date)}
                    </time>
                    <div className='ml-4'>
                      <span className='inline-block rounded-md bg-[#EDEDED] p-2 px-3 text-xs'>Category</span>
                    </div>
                  </div>
                  <h3 className='mt-2 md:ml-8 md:mt-0'>{post.title}</h3>
                </Link>
              </article>
            ))}
        </div>
        <div className='mt-16 md:ml-8 md:mt-0 md:w-full md:max-w-xs md:flex-auto'>
          <SideNav linkPrefix='news' categoryKey={categoryKey} />
        </div>
      </div>
    </>
  )
}

export default async function Archive({ params }: { params: { slug: string } }) {
  const slugArray = params.slug
  const slug = Array.isArray(slugArray) ? slugArray[0] : slugArray
  const data = await fetchData(slug)
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
              <RenderNewsList posts={posts} categoryKey={categoryKey} />
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
