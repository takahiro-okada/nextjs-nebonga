'use client'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import React, { useEffect } from 'react'

interface SnsIconsProps {
  className?: string
  open?: boolean
}

export default function SnsIcons({ className = 'w-8', open = false }: SnsIconsProps) {
  const controls = useAnimation()

  useEffect(() => {
    if (open) {
      controls.start({ opacity: 1, transition: { delay: 0.5, duration: 0.5 }, y: 0 })
    } else {
      controls.start({ opacity: 0, y: 10 })
    }
  }, [open, controls])

  return (
    <motion.ul initial={{ opacity: 0, y: 10 }} animate={controls} className='flex justify-center gap-4'>
      {[
        { alt: 'Youtube', href: 'https://www.youtube.com/@nebongainc', src: '/images/icon-youtube-black.svg' },
        {
          alt: 'Instagram',
          href: 'https://www.instagram.com/hiro_kawasaki0610',
          src: '/images/icon-instagram-black.svg',
        },
        { alt: 'x', href: 'https://twitter.com/hiro_works0610', src: '/images/icon-x-black.svg' },
        {
          alt: 'Facebook',
          href: 'https://www.facebook.com/yoshihiro.kawasaki.94',
          src: '/images/icon-facebook-black.svg',
        },
      ].map((link, index) => (
        <li key={index}>
          <a target='_blank' href={link.href}>
            <Image src={link.src} alt={link.alt} width={32} height={32} className={`h-full rounded-xl ${className}`} />
          </a>
        </li>
      ))}
    </motion.ul>
  )
}
