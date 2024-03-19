'use client'
import getCategoryBySlug from '@/lib/queries/getCategoryBySlug'

import CommonContainer from '../../../components/CommonContainer'
import ContentList from '../../../components/ContentList'
import PageTitle from '../../../components/PageTItle'
import SideNav from '../../../components/SideNav'

export default async function CategoryArchive({ params }: { params: any }) {
  const works = await getCategoryBySlug(params.slug, 10, 'works')
  return (
    <main>
      <CommonContainer>
        <section>
          <PageTitle title='Works' subtitle='感じたことなどを綴ります' />
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>
              <ContentList items={works} basePath='works' categoryKey='worksCategories' />
            </div>
            <div className='md:ml-8 md:w-full md:max-w-xs md:flex-auto'>
              <SideNav linkPrefix='works' categoryKey='worksCategories' />
            </div>
          </div>
        </section>
      </CommonContainer>
    </main>
  )
}
