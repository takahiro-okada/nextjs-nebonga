import { Button } from '@/app/components/Button'

export default function CtaButtons() {
  return (
    <div className='flex flex-col content-center justify-center gap-6 md:flex-row'>
      <Button href='/contact'>フォームからお問い合わせ</Button>
      <Button href='/contact' buttonColor='bg-[#00B900]'>
        LINEからお問い合わせ
      </Button>
    </div>
  )
}
