import Link from 'next/link'

import getCategoryBySlug from '@/lib/queries/getCategoryBySlug'
import { Post } from '@/lib/types'
import formatDate from '@/src/app/components/util/formatDate'

import CommonContainer from '../../../components/CommonContainer'
import PageTitle from '../../../components/PageTItle'
import SideNav from '../../../components/SideNav'

export default async function CategoryArchive({ params }: { params: any }) {
  const news: Post[] = await getCategoryBySlug(params.slug, 10, 'news')
  console.log(news)
  return (
    <main>
      <CommonContainer>
        <section>
          <PageTitle title='News' subtitle='各種お知らせ' />
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>
              {news &&
                news.map((news) => (
                  <article key={news.databaseId} className='mb-4 border-b-DEFAULT bg-white'>
                    <Link
                      href={`/news/${news.slug}`}
                      className='inline-block py-3 md:flex md:items-start md:align-middle'
                    >
                      <div className='flex content-center min-w-44'>
                        <time className='inline-block' dateTime={news.date}>
                          {formatDate(news.date)}
                        </time>
                        <div className='ml-4'>
                          <span className='inline-block rounded-md bg-[#EDEDED]  p-2 px-3 text-xs'>
                            {news.newsCategories?.nodes[0].name}
                          </span>
                        </div>
                      </div>
                      <h3 className='mt-2 md:ml-8 md:mt-0'>{news.title}</h3>
                    </Link>
                  </article>
                ))}
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
