import type { Metadata } from 'next'

import CommonContainer from '@/components/base/CommonContainer'
import PageTitle from '@/components/ui/PageTItle'
import ContactForm from '@/components/pages/ContactForm'

export const metadata: Metadata = {
  title: 'NeBonga | Contact',
  description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
}

export default function Contact() {
  return (
    <main className='mt-32'>
      <CommonContainer>
        <section>
          <PageTitle title='Contact' subtitle='写真撮影、映像制作等のご依頼・ご相談窓口です。' />
          <div className='mt-11 md:mt-28 md:flex'>
            <div className='md:w-1/2'>
              <h3>フォームからのお問い合わせ</h3>
              <p>
                お手数ですが、右の項目をご記入の上「同意して送信する」ボタンを押してください。
                詳しくご記入いただけますと、ご契約までがスムーズになると思いますので、よろしくお願いいたします。
              </p>
              <p className='mt-7 text-sm'>※3営業日以内に担当者よりご連絡させていただきます</p>
            </div>
            <div className='mt-8 md:ml-24 md:mt-0 md:w-1/2'>
              <ContactForm />
            </div>
          </div>
        </section>
      </CommonContainer>
    </main>
  )
}
