import { Button } from '../Button'
import CommonContainer from '../CommonContainer'
import { SectionTitle } from '../SectionTitle'

export default function Cta() {
  return (
    <>
      <section className='mt-24'>
        <CommonContainer>
          <div className='border-2 border-[EDEFF1] px-8 py-10  lg:flex lg:items-center lg:justify-between lg:px-20'>
            <div className=''>
              <SectionTitle title='Contact' subtitle='お問い合わせ' />
              <p className='mt-8'>
                写真撮影、映像制作等
                <br />
                お気軽にお問い合わせください。
              </p>
            </div>
            <div className='mt-6'>
              <div className='flex flex-col gap-6 md:flex-row'>
                <Button href='/contact'>フォームからお問い合わせ</Button>
                <Button href='/contact' buttonColor='bg-[#00B900]'>
                  LINEからお問い合わせ
                </Button>
              </div>
            </div>
          </div>
        </CommonContainer>
      </section>
    </>
  )
}
