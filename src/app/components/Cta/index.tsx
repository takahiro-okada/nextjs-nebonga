import { Button } from '../Button'
import { SectionTitle } from '../SectionTitle'

export default function Cta() {
  return (
    <>
      <section className='mt-24'>
        <div className='container relative mx-auto px-3'>
          <div className='border-2 border-[EDEFF1] px-8 py-10  lg:px-20 lg:flex lg:justify-between lg:items-center'>
            <div className=''>
              <SectionTitle title='Contact' subtitle='お問い合わせ' />
              <p className='mt-8'>
                写真撮影、映像制作等
                <br />
                お気軽にお問い合わせください。
              </p>
            </div>
            <div className='mt-6'>
              <div className='flex gap-6 flex-col md:flex-row'>
                <Button href='/contact'>フォームからお問い合わせ</Button>
                <Button href='/contact' buttonColor='bg-[#00B900]'>
                  LINEからお問い合わせ
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
