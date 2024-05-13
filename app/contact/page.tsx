import type { Metadata } from 'next'
import ContactForm from '@/components/pages/ContactForm'

export const metadata: Metadata = {
  title: 'NeBonga | Contact',
  description: '株式会社NeBonga | ドキュメンタリー、ショートフィルム、ソーシャルプロジェクトの映像制作会社です。',
}

export default function Contact() {
  return (
    <main className='mt-32'>
      <ContactForm />
    </main>
  )
}
