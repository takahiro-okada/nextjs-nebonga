import type { Metadata } from 'next'

import CommonContainer from '@/components/base/CommonContainer'
import SideNav from '@/components/base/SideNav'
import ContentList from '@/components/pages/ContentList'
import PageTitle from '@/components/ui/PageTItle'
import getCategoryBySlug from '@/libs/queries/getCategoryBySlug'
import getCategoryNameBySlug from '@/libs/queries/getCategoryNameBySlug'

export const metadata: Metadata = {
  title: 'NeBonga | Works',
  description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
}

export default async function CategoryArchive({ params }: { params: any }) {
  const { nodes: works, total } = await getCategoryBySlug(params.slug, 10, 'works')
  const categoryName = await getCategoryNameBySlug(params.slug[params.slug.length - 1], 'worksCategories')

  return (
    <main className='mt-32'>
      <CommonContainer>
        <section>
          <PageTitle title='Works' subtitle='NeBongaのお仕事の一部をご紹介します' />
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>
              <ContentList
                items={works}
                basePath='works'
                categoryKey='worksCategories'
                total={total}
                categoryName={categoryName}
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
