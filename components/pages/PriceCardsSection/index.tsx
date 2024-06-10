'use client'
import { motion } from 'framer-motion'

import CommonContainer from '@/components/base/CommonContainer'
import PriceCard from '@/components/pages/PriceCard'
import PageTitle from '@/components/ui/PageTitle'

export default function PriceCardsSection() {
  return (
    <CommonContainer>
      <PageTitle title='Price' subtitle='NeBongaのお仕事の一部をご紹介します' />
      <motion.div
        className='mt-10'
        viewport={{ once: true }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: 'easeOut',
        }}
      >
        <p className='mt-12 md:mt-16'>
          お客様のご要望に合わせた映像制作/写真撮影を行っているため、料金を一律にしておりません。
          <br />
          正確な御見積りはヒアリングののちにご提示致しますが、目安となるお見積りと価格表は下記の通りです。
        </p>
      </motion.div>
      <section>
        <ul className='mt-16 grid gap-12 md:mt-16 md:grid-cols-2 md:gap-x-6 md:gap-y-12'>
          <PriceCard
            caseNumber='01'
            title={`個人向け\nプロモーション映像・写真`}
            description='結婚式のオープニング・プロフィール映像など'
            priceRange='15〜35'
            additionalInfo='映像撮影は初めて！という方も大歓迎。アイデア出しや構成もサポートします。写真のみの方もご相談ください。'
            points={['企画構成', '映像撮影', '前撮り・後撮り撮影', 'データ or DVD納品']}
          />
          <PriceCard
            caseNumber='02'
            title={`企業・団体向け Web動画`}
            description='ウェビナー動画編集・事業PR映像など'
            priceRange='25〜50'
            additionalInfo='インタビュー映像なども含めた説得力のあるPR映像を撮影させていただきます。 Webサイトのトップページに載せる動画など。'
            points={['企画構成', '映像撮影（完成尺目安3分以内）', '写真撮影', 'データ or DVD納品']}
          />
          <PriceCard
            caseNumber='03'
            title={`個人企業・団体向け\nWeb動画・CM撮影`}
            description='長尺事業PR映像, 短編ドラマ系など'
            priceRange='50〜250'
            additionalInfo='ストーリー性・作品性の高いインパクトのある映像を撮影いたします。ライティングやカラーで個性を出したい方はこちらへ。'
            points={['企画構成', '映像撮影（完成尺目安5~10分以内）', '写真撮影', 'データ or DVD納品']}
          />
          <PriceCard
            caseNumber='04'
            title={`企業・団体向け\nオールインワン`}
            description='新規事業PR, 新卒採用動画など'
            priceRange='200〜350'
            additionalInfo='映像制作・写真撮影・Webサイト制作やロゴデザインなど、広報におけるコンテンツ作成をセットで承ります。'
            points={[
              '企画構成',
              '映像撮影（完成尺目安10分以上）',
              '写真撮影',
              'Webサイト・ロゴデザイン制作',
              'データ or DVD納品',
            ]}
          />
        </ul>
      </section>
    </CommonContainer>
  )
}
