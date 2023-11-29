'use client'
import { useState } from 'react'

import PageMainVisual from '@/app/components/PageMainVIsual'
import { SectionTitle } from '@/app/components/SectionTitle'
import SideNav from '@/app/components/SideNav'
import Work from '@/app/types/work'

export default function WorkDetail() {
  const [work, setWork] = useState<Work | null>(null)
  const [error, setError] = useState<string | null>(null)

  if (error) {
    return <div>Error: {error}</div>
  }

  return (
    <main>
      <PageMainVisual title='Works' bgImage='/images/bg-sample.jpg' />

      <section>
        <SectionTitle title='Works' subtitle='制作実績' />

        <div className='mt-8 grid grid-cols-3 gap-4'>
          <div className='col-span-2'>
            <div className='grid grid-cols-2 gap-4'>
              {work && (
                <div>
                  <h3>{work.title}</h3>
                  <div dangerouslySetInnerHTML={{ __html: work.content }} />
                </div>
              )}
            </div>
          </div>
          <div className='col-span-1'>
            <SideNav />
          </div>
        </div>
      </section>
    </main>
  )
}
