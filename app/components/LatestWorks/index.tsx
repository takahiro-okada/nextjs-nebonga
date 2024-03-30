'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <SectionTitle title='Works' subtitle='制作実績' />
        </motion.div>
        <div className='mt-8'>
          <ul className='grid gap-6 md:grid-cols-3'>
            {works.posts.map((work: Post) => (
              <motion.div
                key={work.slug}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.5,
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                <li key={work.slug} className='group'>
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
                </li>
              </motion.div>
            ))}
          </ul>
        </div>
        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          <div className='mt-14 text-center'>
            <Button href='/works'>view more</Button>
          </div>
        </motion.div>
      </CommonContainer>
    </section>
  )
}
