import CommonContainer from '@/components/base/CommonContainer'
import SideNav from '@/components/base/SideNav'
import ContentList from '@/components/pages/ContentList'
import PageTitle from '@/components/ui/PageTItle'
import getCategoryBySlug from '@/libs/queries/getCategoryBySlug'
import getCategoryNameBySlug from '@/libs/queries/getCategoryNameBySlug'

export default async function CategoryArchive({ params }: { params: any }) {
  const { nodes: story, total } = await getCategoryBySlug(params.slug, 10, 'story')

  const categoryName = await getCategoryNameBySlug(params.slug[params.slug.length - 1], 'categories')

  return (
    <main className='mt-32'>
      <CommonContainer>
        <section>
          <PageTitle title='Story' subtitle='感じたことなどを綴ります' />
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>
              <ContentList
                items={story}
                basePath='story'
                categoryKey='categories'
                total={total}
                categoryName={categoryName}
              />
            </div>
            <div className='mt-16 md:ml-8 md:mt-0 md:w-full md:max-w-xs md:flex-auto'>
              <SideNav linkPrefix='story' categoryKey='categories' />
            </div>
          </div>
        </section>
      </CommonContainer>
    </main>
  )
}
