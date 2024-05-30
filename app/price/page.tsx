import type { Metadata } from 'next'

import CommonContainer from '@/components/base/CommonContainer'
import LessonWorks from '@/components/pages/LessonWorks'
import PriceCardsSection from '@/components/pages/PriceCardsSection'
import PriceFlowSection from '@/components/pages/PriceFlowSection'

export const metadata: Metadata = {
  title: 'NeBonga | Videography&Photography - Price',
  description:
    '株式会社NeBonga（ネボンガ）は、企業/団体向けのあらゆる企画・撮影・演出・編集をワンストップで行うプロダクションです。',
}

export default function Price() {
  return (
    <main className='mt-32'>
      <PriceCardsSection />

      <PriceFlowSection />

      <section className='mt-24'>
        <CommonContainer>
          <LessonWorks />
        </CommonContainer>
      </section>
    </main>
  )
}
