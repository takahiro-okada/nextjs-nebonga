'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'

import { Post } from '@/typs/types'
import formatDate from '@/utils/formatDate'

export default function NewsArticle({ index, post }: { index: number; post: Post }) {
  return (
    <motion.article
      key={post.databaseId}
      className='mb-4 border-b bg-white'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 + index * 0.3, duration: 0.5 }}
    >
      <Link href={`/news/${post.slug}`} className='inline-block py-3 md:flex md:items-start md:align-middle'>
        <div className='flex content-center md:w-1/4 md:min-w-52'>
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
    </motion.article>
  )
}
