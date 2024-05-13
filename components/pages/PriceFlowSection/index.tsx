'use client'
import { motion } from 'framer-motion'

import CommonContainer from '@/components/base/CommonContainer'
import FlowCard from '@/components/pages/FlowCrad'
import { Button } from '@/components/ui/Button'

export default function PriceFlowSection() {
  return (
    <section className='mt-24 bg-grayLight py-24'>
      <CommonContainer>
        <motion.h2
          className='text-3xl font-bold'
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          ご依頼までの流れ
        </motion.h2>
        <motion.p
          className='mt-6'
          viewport={{ once: true }}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.5,
            duration: 0.8,
            ease: 'easeOut',
          }}
        >
          目的を明確にするヒアリングで“想い”を視覚化するお手伝いをさせていただきます 。<br />
          まずは、お気軽にお問い合わせください。
        </motion.p>

        <ul className='mt-10 grid items-center justify-center gap-6 md:grid-cols-3 md:items-stretch lg:grid-cols-5'>
          <FlowCard
            number='01'
            titleEn='Contact'
            titleJa='お問い合わせ'
            iconImageSrc='/images/icon-email.svg'
            description='Webサイト上のお問い合わせフォームもしくは公式LINEにてお問い合わせをお願いいたします。'
          />
          <FlowCard
            number='02'
            titleEn='Meeting'
            titleJa='打ち合わせ'
            iconImageSrc='/images/icon-chat.svg'
            description='ご用件をヒアリングさせていただき、撮影目的・内容・希望納期等を整理させていただきます。'
          />
          <FlowCard
            number='03'
            titleEn='Estimate'
            titleJa='お見積もり'
            iconImageSrc='/images/icon-note.svg'
            description='お見積書をお送りしますので、内容をご確認いただき、ご了承いただければ撮影行程へ。'
          />
          <FlowCard
            number='04'
            titleEn='Filming'
            titleJa='撮影・編集'
            iconImageSrc='/images/icon-camera.svg'
            description='撮影と編集を行います。編集行程でも随時進捗状況を共有させていただきます。'
          />
          <FlowCard
            number='05'
            titleEn='Confirm'
            titleJa='納品'
            iconImageSrc='/images/icon-present.svg'
            description='完成品をデータ or DVDにてお渡しします。費用をお支払いいただき、お取引の終了となります。'
          />
        </ul>
        <div className='mt-14'>
          <div className='flex flex-col items-center justify-center gap-6 align-middle md:flex-row'>
            <Button href='/contact'>フォームからお問い合わせ</Button>
            <Button href='/contact' buttonColor='bg-[#00B900]'>
              LINEからお問い合わせ
            </Button>
          </div>
        </div>
      </CommonContainer>
    </section>
  )
}
