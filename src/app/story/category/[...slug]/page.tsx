'use client'
import getCategoryBySlug from '@/lib/queries/getCategoryBySlug'

import CommonContainer from '../../../components/CommonContainer'
import ContentList from '../../../components/ContentList'
import PageTitle from '../../../components/PageTItle'
import SideNav from '../../../components/SideNav'

export default async function CategoryArchive({ params }: { params: any }) {
  const story = await getCategoryBySlug(params.slug)

  return (
    <main>
      <CommonContainer>
        <section>
          <PageTitle title='Story' subtitle='感じたことなどを綴ります' />
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>
              <ContentList items={story} basePath='story' categoryKey='categories' />
            </div>
            <div className='md:ml-8 md:w-full md:max-w-xs md:flex-auto'>
              <SideNav linkPrefix='story' categoryKey='categories' />
            </div>
          </div>
        </section>
      </CommonContainer>
    </main>
  )
}
