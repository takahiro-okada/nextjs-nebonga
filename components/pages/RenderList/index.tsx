// components/RenderList.tsx
import PageTitle from '@/components/ui/PageTItle'
import ContentList from '@/components/pages/ContentList'
import SideNav from '@/components/base/SideNav'
import NewsArticle from '@/components/pages/NewsArticle'
import { Post } from '@/typs/types'
import Pagination from '@/components/ui/Pagination'
import { PAGE_SIZE } from '@/libs/constants'

export function RenderPostList({
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
  const totalPages = Math.ceil(total / PAGE_SIZE)

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

export function RenderNewsList({
  categoryKey,
  posts,
  currentPage,
  total,
}: {
  categoryKey: 'newsCategories'
  posts: Post[]
  currentPage: number
  total: number
}) {
  const totalPages = Math.ceil(total / PAGE_SIZE)

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
