'use client'

import GET_WORKS from '@/graphql/getWorksQuery'

import useFetchData from '../components/hooks/useFetchData'
import PageTitle from '../components/PageTItle'
import SideNav from '../components/SideNav'

export default function Page() {
  const { data, error, isLoading } = useFetchData(GET_WORKS, 'https://wp.nebonga.com/graphql')

  return (
    <main>
      <div className='container relative mx-auto px-3'>
        <section>
          <PageTitle title='制作実績' subtitle='Works' />
          <div className='mt-8 md:flex'>
            <div className='flex-auto'>{/* <ContentList items={data?.works.nodes} basePath='works' /> */}</div>
            <div className='md:ml-8 md:w-full md:max-w-xs md:flex-auto'>
              <SideNav />
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
