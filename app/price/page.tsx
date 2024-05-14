import type { Metadata } from 'next'

import CommonContainer from '@/components/base/CommonContainer'
import LessonWorks from '@/components/pages/LessonWorks'
import PriceCardsSection from '@/components/pages/PriceCardsSection'
import PriceFlowSection from '@/components/pages/PriceFlowSection'

export const metadata: Metadata = {
  title: 'NeBonga | Price',
  description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
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
