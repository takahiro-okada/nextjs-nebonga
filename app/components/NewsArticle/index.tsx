import Link from 'next/link'
import formatDate from '@/app/components/util/formatDate'
import { Post } from '@/lib/types'

export default function NewsArticle({ post }: { post: Post }) {
  return (
    <article key={post.databaseId} className='mb-4 border-b bg-white'>
      <Link href={`/news/${post.slug}`} className='inline-block py-3 md:flex md:items-start md:align-middle'>
        <div className='flex content-center md:w-1/4 md:min-w-44'>
          <time className='inline-block' dateTime={post.date}>
            {formatDate(post.date)}
          </time>
          <div className='ml-4'>
            <span className='inline-block rounded-md bg-[#EDEDED] p-2 px-3 text-xs'>
              {post.newsCategories?.nodes.map((category) => category.name).join(', ')}
            </span>
          </div>
        </div>
        <h3 className='mt-2 md:ml-8 md:mt-0 md:w-3/4'>{post.title}</h3>
      </Link>
    </article>
  )
}
