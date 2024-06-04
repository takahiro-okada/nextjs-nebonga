import React from 'react'

import CommonContainer from '@/components/base/CommonContainer'
import WorkItems from '@/components/pages/WorksItems'
import { Button } from '@/components/ui/Button'
import { SectionTitle } from '@/components/ui/SectionTitle'
import getTopWorks from '@/libs/queries/getTopWorks'

export default async function LatestWorks() {
  const posts = await getTopWorks()

  return (
    <section className='bg-grayLight pb-40 pt-10 md:pt-20'>
      <CommonContainer>
        <SectionTitle title='Works' subtitle='制作実績' />
        <div className='mt-8'>
          <ul className='grid gap-6 md:grid-cols-3'>
            <WorkItems posts={posts.posts} />
          </ul>
        </div>
        <div className='mt-14 text-center'>
          <Button href='/works'>view more</Button>
        </div>
      </CommonContainer>
    </section>
  )
}
