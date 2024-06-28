import type { Metadata } from 'next'

import CommonContainer from '@/components/base/CommonContainer'
import GalleryContent from '@/components/pages/GalleryCotent'
import PageTitle from '@/components/ui/PageTItle'
import getPageBySlug from '@/libs/queries/getPageBySlug'

export const metadata: Metadata = {
  title: 'NeBonga | Videography&Photography - Gallery',
  description:
    '株式会社NeBonga（ネボンガ）は、企業/団体向けのあらゆる企画・撮影・演出・編集をワンストップで行うプロダクションです。',
}

async function fetchData(slug: string) {
  // Otherwise, this could be a page.
  const page = await getPageBySlug(slug)

  // If page data exists, return it.
  if (page) {
    return { post: page }
  }

  // Otherwise, return an error.
  return { error: 'No data found' }
}

export default async function Gallery() {
  const { slug } = { slug: 'gallery' }

  const data = await fetchData(slug)

  // data に post プロパティが存在するかどうかを確認し、なければエラー表示
  if (!data.post) {
    return (
      <main className='mt-32'>
        <CommonContainer>
          <PageTitle title='Gallery' subtitle='写真の一部' />
          <p className='text-red-500'>No images available or error: {data.error}</p>
        </CommonContainer>
      </main>
    )
  }

  return (
    <main className='mt-32'>
      <CommonContainer>
        <PageTitle title='Gallery' subtitle='ギャラリー' />
        <GalleryContent post={data.post} />
      </CommonContainer>
    </main>
  )
}
