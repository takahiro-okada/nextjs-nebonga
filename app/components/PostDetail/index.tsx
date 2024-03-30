import Image from 'next/image'
import Link from 'next/link'

import { Category, Post } from '@/lib/types'

import CommonContainer from '../CommonContainer'
import CtaButtons from '../CtaButtons'
import formatDate from '../util/formatDate'

interface PostDetailProps {
  categoryKey: 'newsCategories' | 'categories' | 'worksCategories'
  post: Post
  slug: string
}

export default function PostDetail({ categoryKey, post, slug }: PostDetailProps) {
  const categoryData = post[categoryKey]
  const categories = categoryData?.nodes ? categoryData.nodes : []

  return (
    <main className='mt-24'>
      <CommonContainer>
        <article className='mx-auto mt-16 max-w-3xl'>
          <Image
            src={post.featuredImage?.node?.sourceUrl || '/images/image-placeholder.jpg'}
            alt={post.featuredImage?.node?.altText || ''}
            width={640}
            height={300}
            className='aspect-video w-full object-cover transition-transform duration-300 group-hover:scale-110'
          />
          <header>
            <p className='mt-3'>
              <time>{formatDate(post.date)}</time>
            </p>
            <h1 className='mt-3 text-4xl font-bold' dangerouslySetInnerHTML={{ __html: post.title }} />
            <ul className='mt-4 flex list-none gap-2 p-0'>
              {categories.map((category: Category) => {
                const parentSlug = category.parent?.node?.slug ? `${category.parent.node.slug}/` : ''
                return (
                  <Link
                    key={category.name}
                    className='inline-block rounded-md bg-[#EDEDED] p-2 px-3 text-xs'
                    href={`/${slug}/category/${parentSlug}${category.slug}/`}
                    passHref
                  >
                    {category.name}
                  </Link>
                )
              })}
            </ul>
          </header>
          <div className='prose mx-auto mt-8 max-w-full' dangerouslySetInnerHTML={{ __html: post.content }} />
          <div className='mt-14 bg-[#F5F6F7] p-5 pb-9 pt-8'>
            <p className='text-center text-xl font-bold'>お気軽にご相談ください</p>
            <p className='text-center'>写真撮影・映像制作などご要望に合わせて承ります。</p>
            <div className='mt-6'>
              <CtaButtons />
            </div>
          </div>
        </article>
      </CommonContainer>
      <nav className='mt-8 flex items-center justify-between border-y-DEFAULT border-gray-400 py-12'>
        <div className='mx-auto w-full max-w-4xl'>
          <div className='flex justify-between'>
            {post.previous ? (
              <Link
                className='relative inline-block w-4/5 text-left font-Montserrat tracking-wider ml-2 before:top-1/2 before:mr-8 before:inline-block before:w-8 before:-translate-y-1/2 before:border-t-2 before:border-black md:before:w-36'
                href={`/${slug}/${post.previous.slug}`}
              >
                Prev
              </Link>
            ) : (
              <div className='w-4/5 text-left' />
            )}
            <Link className={`inline-block `} href={`/${slug}/`}>
              <Image
                src='/images/icon-archive-list.svg'
                alt='Back to story list'
                width={40}
                height={40}
                className='inline-block w-16'
              />
            </Link>
            {post.next ? (
              <Link
                className='relative inline-block w-4/5 text-right font-Montserrat tracking-wider mr-2 after:top-1/2 after:ml-8 after:inline-block after:w-8 after:-translate-y-1/2 after:border-t-2 after:border-black md:after:w-36'
                href={`/${slug}/${post.next.slug}`}
              >
                Next
              </Link>
            ) : (
              <div className='w-4/5 text-right' />
            )}
          </div>
        </div>
      </nav>
    </main>
  )
}
