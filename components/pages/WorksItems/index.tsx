'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Post } from '@/typs/types'

interface WorkItemsProps {
  posts: Post[]
}

const WorkItems: React.FC<WorkItemsProps> = ({ posts }) => {
  return (
    <>
      {posts.map((work: Post, index) => (
        <motion.li
          key={work.slug}
          className='group'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 + index * 0.3, duration: 0.5 }}
        >
          <Link href={`/works/${work.slug}/`}>
            <div className='relative aspect-video h-auto w-full overflow-hidden rounded-md'>
              <div className='absolute left-0 top-0 z-10 size-full bg-black opacity-30'></div>
              <Image
                src={work.featuredImage?.node?.sourceUrl || '/images/image-placeholder.jpg'}
                alt={work.featuredImage?.node?.altText || ''}
                width={640}
                height={300}
                className='aspect-video object-cover transition-transform duration-300 group-hover:scale-110'
              />
              <h3 className='absolute bottom-0 z-10 mt-2 px-5 py-4 font-semibold text-white'>{work.title}</h3>
            </div>
          </Link>
        </motion.li>
      ))}
    </>
  )
}

export default WorkItems
