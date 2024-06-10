import type { Metadata } from 'next'

import CommonContainer from '@/components/base/CommonContainer'
import SideNav from '@/components/base/SideNav'
import NewsArticle from '@/components/pages/NewsArticle'
import PageTitle from '@/components/ui/PageTitle'
import Pagination from '@/components/ui/Pagination'
import { PAGE_SIZE } from '@/libs/constants'
import getCategoryBySlug from '@/libs/queries/getCategoryBySlug'
import getCategoryNameBySlug from '@/libs/queries/getCategoryNameBySlug'
import { Post } from '@/typs/types'

export const metadata: Metadata = {
  title: 'NeBonga | Videography&Photography - News',
  description:
    '株式会社NeBonga（ネボンガ）は、企業/団体向けのあらゆる企画・撮影・演出・編集をワンストップで行うプロダクションです。',
}

export default async function CategoryArchive({ params }: { params: any }) {
  const slugArray = params.slug
  const pageIndex = slugArray.indexOf('page')
  const page = pageIndex !== -1 ? parseInt(slugArray[pageIndex + 1], 10) : 1
  const categorySlug = pageIndex !== -1 ? slugArray.slice(0, pageIndex) : slugArray
  const offset = (page - 1) * PAGE_SIZE

  const { nodes: posts, total } = await getCategoryBySlug(categorySlug, offset, PAGE_SIZE, 'news')
  const categoryName = await getCategoryNameBySlug(slugArray[slugArray.length - 1], 'newsCategories')

  const totalPages = Math.ceil(total / PAGE_SIZE)

  return (
    <main className='mt-32'>
      <CommonContainer>
        <section>
          <PageTitle title='News' subtitle='各種お知らせ' />
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>
              {posts &&
                posts.map((post: Post, index: number) => (
                  <NewsArticle index={index} key={post.databaseId} post={post} />
                ))}
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                basePath={`news/category/${categorySlug.join('/')}`}
              />
            </div>
            <div className='mt-16 md:ml-8 md:mt-0 md:w-full md:max-w-xs md:flex-auto'>
              <SideNav linkPrefix='news' categoryKey='newsCategories' />
            </div>
          </div>
        </section>
      </CommonContainer>
    </main>
  )
}
