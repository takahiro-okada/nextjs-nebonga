import React from 'react'

import WorkItems from '@/components/pages/WorksItems'
import getPickupWorks from '@/libs/queries/getPickupWorks'

export default async function RecommendedWorks() {
  const posts = await getPickupWorks(6)

  return (
    <>
      <p className='font-Montserrat text-xl font-bold'>Recommended Works</p>
      <ul className='mt-6 grid gap-6'>
        <WorkItems posts={posts.posts} />
      </ul>
    </>
  )
}
