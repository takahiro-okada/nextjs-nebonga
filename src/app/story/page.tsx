'use client'

import GET_STORIES from '@/graphql/getStoriesQuery'

import ContentList from '../components/ContentList'
import useFetchData from '../components/hooks/useFetchData'
import PageTitle from '../components/PageTItle'
import SideNav from '../components/SideNav'
import { StoriesResponse } from '../types/storiesResponse'

export default function Page() {
  const { data, error, isLoading } = useFetchData<StoriesResponse>(GET_STORIES, 'https://wp.nebonga.com/graphql')

  return (
    <main>
      <div className='container relative mx-auto px-3'>
        <section>
          <PageTitle title='制作実績' subtitle='Works' />
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>
              <ContentList items={data?.posts.nodes} basePath='works' type='story' />
            </div>
            <div className='md:ml-8 md:w-full md:max-w-xs md:flex-auto'>
              <SideNav />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
