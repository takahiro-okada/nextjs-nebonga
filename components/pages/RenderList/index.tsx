// components/RenderList.tsx
import SideNav from '@/components/base/SideNav'
import ContentList from '@/components/pages/ContentList'
import NewsArticle from '@/components/pages/NewsArticle'
import PageTitle from '@/components/ui/PageTItle'
import Pagination from '@/components/ui/Pagination'
import { PAGE_SIZE } from '@/libs/constants'
import { Post } from '@/typs/types'

export function RenderPostList({
  title,
  basePath,
  categoryKey,
  slug,
  categoryName,
  currentPage,
  posts,
  subtitle,
  total,
}: {
  title: string
  basePath: string
  slug: string
  categoryKey: 'categories' | 'worksCategories' | 'newsCategories'
  categoryName: string
  currentPage: number
  posts: Post[]
  subtitle: string
  total: number
}) {
  const totalPages = Math.ceil(total / PAGE_SIZE)
  return (
    <>
      <PageTitle title={title} subtitle={subtitle} />
      <div className='mt-8 md:flex'>
        <div className='flex-auto'>
          <ContentList
            items={posts}
            basePath={basePath}
            categoryKey={categoryKey}
            total={total}
            slug={slug}
            categoryName='ALL'
          />
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
  currentPage,
  posts,
  total,
}: {
  categoryKey: 'newsCategories'
  currentPage: number
  posts: Post[]
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
