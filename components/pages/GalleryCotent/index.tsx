'use client'
import parse, { Element } from 'html-react-parser'
import Image from 'next/image'
import { useState } from 'react'

import ImageModal from '@/components/ui/ImageModal'

interface ParseContentProps {
  content: string
  handleImageClick: (src: string, alt: string, width: number, height: number) => void
}

interface ModalImage {
  alt: string
  height: number
  src: string
  width: number
}

interface GalleryContentProps {
  post: {
    content: string
  }
}
function parseContent({ content, handleImageClick }: ParseContentProps) {
  return parse(content, {
    replace: (domNode) => {
      // DOMNodeをElementタイプとして扱うための型アサーション
      if ((domNode as Element).name === 'img') {
        const element = domNode as Element
        if (element.attribs) {
          const { alt, height, src, width } = element.attribs
          const widthNum = parseInt(width, 10)
          const heightNum = parseInt(height, 10)
          return (
            <Image
              src={src} // srcとaltは、element.attribsから直接取得
              alt={alt ? alt : 'Image'}
              onClick={() => handleImageClick(src, alt, widthNum, heightNum)}
              className='cursor-pointer transition-opacity duration-300 hover:opacity-90'
              layout='responsive'
              width={widthNum}
              height={heightNum}
            />
          )
        }
      }
    },
  })
}

export default function GalleryContent({ post }: GalleryContentProps) {
  const [modalImage, setModalImage] = useState<ModalImage | null>(null)

  const handleImageClick = (src: string, alt: string, width: number, height: number) => {
    setModalImage({ alt, height, src, width })
  }

  return (
    <>
      <div className='mt-16' datatype='gallery'>
        {post ? (
          parseContent({ content: post.content, handleImageClick })
        ) : (
          <p className='text-red-500'>No images available.</p>
        )}
      </div>
      {modalImage && (
        <ImageModal
          src={modalImage.src}
          alt={modalImage.alt}
          width={modalImage.width}
          height={modalImage.height}
          onClose={() => setModalImage(null)}
        />
      )}
    </>
  )
}
