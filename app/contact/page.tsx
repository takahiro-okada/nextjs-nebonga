import type { Metadata } from 'next'

import ContactForm from '@/components/pages/ContactForm'

export const metadata: Metadata = {
  title: 'NeBonga | Videography&Photography - Contact',
  description:
    '株式会社NeBonga（ネボンガ）は、企業/団体向けのあらゆる企画・撮影・演出・編集をワンストップで行うプロダクションです。',
}

export default function Contact() {
  return (
    <main className='mt-32'>
      <ContactForm />
    </main>
  )
}
