// app/works/category/[...slug]/page.tsx
import type { Metadata } from 'next'

import CommonContainer from '@/components/base/CommonContainer'
import SideNav from '@/components/base/SideNav'
import ContentList from '@/components/pages/ContentList'
import PageTitle from '@/components/ui/PageTItle'
import Pagination from '@/components/ui/Pagination'
import { PAGE_SIZE } from '@/libs/constants'
import getCategoryBySlug from '@/libs/queries/getCategoryBySlug'
import getCategoryNameBySlug from '@/libs/queries/getCategoryNameBySlug'

export const metadata: Metadata = {
  title: 'NeBonga | Videography&Photography - Works',
  description:
    '株式会社NeBonga（ネボンガ）は、企業/団体向けのあらゆる企画・撮影・演出・編集をワンストップで行うプロダクションです。',
}

export default async function CategoryArchive(props: { params: Promise<{ slug: string[] }> }) {
  const params = await props.params;
  const slugArray = params.slug
  const pageIndex = slugArray.indexOf('page')
  const page = pageIndex !== -1 ? parseInt(slugArray[pageIndex + 1], 10) : 1
  const categorySlug = pageIndex !== -1 ? slugArray.slice(0, pageIndex) : slugArray
  const offset = (page - 1) * PAGE_SIZE

  const { nodes: works, total } = await getCategoryBySlug(categorySlug, offset, PAGE_SIZE, 'works')
  const categoryNameSlug = categorySlug[categorySlug.length - 1]
  const categoryName = await getCategoryNameBySlug(categoryNameSlug, 'worksCategories')

  const totalPages = Math.ceil(total / PAGE_SIZE)

  return (
    <main className='mt-32'>
      <CommonContainer>
        <section>
          <PageTitle title='Works' subtitle='NeBongaのお仕事の一部をご紹介します' />
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>
              <ContentList
                items={works}
                slug='works'
                basePath={`works/category/${categorySlug.join('/')}`}
                categoryKey='worksCategories'
                total={total}
                categoryName={categoryName}
              />
              <Pagination
                currentPage={page}
                totalPages={totalPages}
                basePath={`works/category/${categorySlug.join('/')}`}
              />
            </div>
            <div className='mt-16 md:ml-8 md:mt-0 md:w-full md:max-w-xs md:flex-auto'>
              <SideNav linkPrefix='works' categoryKey='worksCategories' />
            </div>
          </div>
        </section>
      </CommonContainer>
    </main>
  )
}
