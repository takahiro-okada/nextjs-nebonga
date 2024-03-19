import Link from 'next/link'

import getAllNews from '@/lib/queries/getAllNews'
import getAllStoryies from '@/lib/queries/getAllStories'
import getAllWorks from '@/lib/queries/getAllWorks'
import { Post } from '@/lib/types'
import CommonContainer from '@/src/app/components/CommonContainer'
import ContentList from '@/src/app/components/ContentList'
import PageTitle from '@/src/app/components/PageTItle'
import SideNav from '@/src/app/components/SideNav'

import formatDate from '../components/util/formatDate'
import page from '../page'

async function fetchData(slug: string) {
  if (slug === 'story') {
    return {
      basePath: 'story',
      categoryKey: 'categories',
      context: 'Story',
      posts: await getAllStoryies(),
      subtitle: '感じたことなどを綴ります',
    }
  }

  if (slug === 'works') {
    return {
      basePath: 'works',
      categoryKey: 'worksCategories',
      context: 'Works',
      posts: await getAllWorks(),
      subtitle: '感じたことなどを綴ります',
    }
  }

  if (slug === 'news') {
    return {
      basePath: 'news',
      categoryKey: 'newsCategories',
      context: 'News',
      posts: await getAllNews(),
      subtitle: '各種お知らせ',
    }
  }

  // Otherwise, this could be a page.
  // const page = await getPageBySlug(slug)

  // If page data exists, return it.
  if (page) {
    return { post: page }
  }

  // Otherwise, return an error.
  return { error: 'No data found' }
}

function RenderPostList({
  title,
  basePath,
  categoryKey,
  posts,
  subtitle,
}: {
  title: string
  basePath: string
  categoryKey: 'categories' | 'worksCategories' | 'newsCategories'
  posts: Post[]
  subtitle: string
}) {
  return (
    <>
      <PageTitle title={title} subtitle={subtitle} />
      <div className='mt-8 md:flex'>
        <div className='flex-auto'>
          <ContentList items={posts} basePath={basePath} categoryKey={categoryKey} />
        </div>
        <div className='md:ml-8 md:w-full md:max-w-xs md:flex-auto'>
          <SideNav linkPrefix={basePath} categoryKey={categoryKey} />
        </div>
      </div>
    </>
  )
}

function RenderNewsList({
  title,
  basePath,
  categoryKey,
  posts,
  subtitle,
}: {
  title: string
  basePath: string
  categoryKey: 'categories' | 'worksCategories' | 'newsCategories'
  posts: Post[]
  subtitle: string
}) {
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
                      <span className='inline-block rounded-md bg-[#eee] p-2 px-3 text-xs'>Category</span>
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
  const slug = Array.isArray(slugArray) ? slugArray[0] : slugArray // slugが配列ならその最初の要素を取得、そうでなければslugをそのまま使う
  const data = await fetchData(slug)
  const { basePath, categoryKey, context, error, posts, subtitle } = data
  if (slug == 'story' || slug == 'works') {
    return (
      <main>
        <CommonContainer>
          <section>
            {posts && posts.length > 0 ? (
              <RenderPostList
                posts={posts}
                title={context}
                subtitle={subtitle}
                basePath={basePath}
                categoryKey={categoryKey as 'categories' | 'worksCategories' | 'newsCategories'}
              />
            ) : (
              <p>No stories found.</p>
            )}
          </section>
        </CommonContainer>
      </main>
    )
  } else if (slug == 'news') {
    return (
      <main>
        <CommonContainer>
          <section>
            {posts && posts.length > 0 ? (
              <RenderNewsList
                posts={posts}
                title={context}
                subtitle={subtitle}
                basePath={basePath}
                categoryKey={categoryKey as 'categories' | 'worksCategories' | 'newsCategories'}
              />
            ) : (
              <p>No stories found.</p>
            )}
          </section>
        </CommonContainer>
      </main>
    )
  } else {
    return (
      <main>
        <CommonContainer>
          <section>
            <h1>No page</h1>
          </section>
        </CommonContainer>
      </main>
    )
  }
}
