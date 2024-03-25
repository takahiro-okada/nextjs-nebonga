import Image from 'next/image'
import Link from 'next/link'

import getAllWorks from '@/lib/queries/getAllWorks'
import { Post } from '@/lib/types'

import { Button } from '../Button'
import CommonContainer from '../CommonContainer'
import { SectionTitle } from '../SectionTitle'

export default async function LatestWorks() {
  const works = await getAllWorks(6)

  return (
    <section className='pb-40 pt-8'>
      <CommonContainer>
        <SectionTitle title='Works' subtitle='制作実績' />
        <div className='mt-8'>
          <ul className='grid gap-6 md:grid-cols-3'>
            {works.posts.map((work: Post) => (
              <li key={work.slug} className='group'>
                <Link href={`/works/${work.slug}/`}>
                  <div className='relative aspect-video h-auto w-full overflow-hidden rounded-md'>
                    <div className='absolute left-0 top-0 z-10 size-full bg-black opacity-30'></div>
                    <Image
                      src={work.featuredImage?.node?.sourceUrl || '/images/image-placeholder.jpg'}
                      alt={work.featuredImage?.node?.altText || ''}
                      width={640}
                      height={300}
                      className='object-cover transition-transform duration-300 group-hover:scale-110'
                    />
                    <h3 className='absolute bottom-0 z-10 mt-2 px-5 py-4 font-semibold text-white'>{work.title}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className='mt-14 text-center'>
          <Button href='/works'>view more</Button>
        </div>
      </CommonContainer>
    </section>
  )
}
