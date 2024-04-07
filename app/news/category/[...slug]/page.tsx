
import getCategoryBySlug from '@/lib/queries/getCategoryBySlug'
import { Post } from '@/lib/types'

import CommonContainer from '../../../components/CommonContainer'
import NewsArticle from '../../../components/NewsArticle'
import PageTitle from '../../../components/PageTItle'
import SideNav from '../../../components/SideNav'

export default async function CategoryArchive({ params }: { params: any }) {
  const { nodes: posts, total } = await getCategoryBySlug(params.slug, 10, 'news')
  return (
    <main className='mt-32'>
      <CommonContainer>
        <section>
          <PageTitle title='News' subtitle='各種お知らせ' />
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>
              {posts && posts.map((post: Post) => <NewsArticle key={post.databaseId} post={post} />)}
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
