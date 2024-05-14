'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

import CommonContainer from '@/components/base/CommonContainer'

export default function ClientList() {
  return (
    <section className='mt-16 bg-grayLight'>
      <div className='mx-auto px-3 py-12'>
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
          <h2 className='text-center font-Montserrat text-2xl font-bold tracking-widest md:text-[28px]'>
            Our Client
          </h2>
        </motion.div>
        <CommonContainer>
          <div className='mx-auto mt-6 grid grid-cols-2 justify-center gap-4 p-5 align-middle md:max-w-4xl md:grid-cols-5'>
            {[
              { alt: 'JICAのロゴ', src: '/images/company-logos/logo-jica.png' },
              { alt: 'JADAのロゴ', src: '/images/company-logos/logo-jada.png' },
              { alt: '大阪大学のロゴ', src: '/images/company-logos/logo-osakauniv.png' },
              { alt: 'かながわ国際交流財団のロゴ', src: '/images/company-logos/logo-kif.png' },
              { alt: 'キャディ株式会社のロゴ', src: '/images/company-logos/logo-caddi.png' },
              { alt: '株式会社マキノハラボのロゴ', src: '/images/company-logos/logo-makilabo.jpg' },
              { alt: '神戸アスリートタウンクラブのロゴ', src: '/images/company-logos/logo-kobe-athlete.png' },
              { alt: 'CCCメディアハウスのロゴ', src: '/images/company-logos/logo-ccc.jpg' },
              { alt: '株式カイシャエコリングのロゴ', src: '/images/company-logos/logo-ecoring.png' },
              { alt: '認定NPG法人コクレオの森のロゴ', src: '/images/company-logos/logo-kokureo.png' },
            ].map((logo, index) => (
              <motion.div
                key={index}
                viewport={{ once: true }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: 0.3 + index * 0.1, // 各要素の遅延をインデックスに基づいて設定
                  duration: 0.8,
                  ease: 'easeOut',
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  className='aspect-square size-full rounded object-contain p-2'
                  width={200}
                  height={200}
                />
              </motion.div>
            ))}
          </div>
        </CommonContainer>
      </div>
    </section>
  )
}
