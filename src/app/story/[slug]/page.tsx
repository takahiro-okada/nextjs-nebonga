import Image from 'next/image'
import Link from 'next/link'

import getPostBySlug from '@/lib/queries/getPostBySlug'
import CommonContainer from '@/src/app/components/CommonContainer'
import formatDate from '@/src/app/components/util/formatDate'

import CtaButtons from '../../components/CtaButtons'

export default async function Post({ params }: { params: { slug: string } }) {
  // Fetch a single post from WordPress.
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return (
      <div>
        <h1>Post not found</h1>
        <p>Check the slug and try again.</p>
      </div>
    )
  }
  console.log(post)
  return (
    <main>
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
            <ul className='m-0 flex list-none gap-2 p-0'>
              {post.categories?.nodes.map((category) => (
                <li className='m-0 p-0' key={category.databaseId}>
                  <Link href={`/blog/category/${category.name}`}>{category.name}</Link>
                </li>
              ))}
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
            {post.previousPost ? (
              <Link
                className='relative inline-block w-fit font-Montserrat tracking-wider before:top-1/2 before:ml-6 before:mr-8 before:inline-block before:w-36 before:-translate-y-1/2 before:border-t-2 before:border-black'
                href={`/story/${post.previousPost.slug}`}
              >
                Prev
              </Link>
            ) : (
              <div className='inline-block font-Montserrat text-xl tracking-wider' />
            )}
            <Link className={`inline-block `} href='/story'>
              <Image
                src='/images/icon-archive-list.svg'
                alt='Back to story list'
                width={40}
                height={40}
                className='inline-block'
              />
            </Link>
            {post.nextPost ? (
              <Link
                className='relative inline-block w-fit font-Montserrat tracking-wider after:top-1/2 after:ml-8 after:inline-block after:w-36 after:-translate-y-1/2 after:border-t-2 after:border-black'
                href={`/story/${post.nextPost.slug}`}
              >
                Next
              </Link>
            ) : (
              <div className='inline-block font-Montserrat text-xl tracking-wider' />
            )}
          </div>
        </div>
      </nav>
    </main>
  )
}
