import CommonContainer from '@/components/base/CommonContainer'
import CtaButtons from '@/components/ui/CtaButtons'
import { SectionTitle } from '@/components/ui/SectionTitle'

export default function Cta() {
  return (
    <>
      <section className='mt-24'>
        <CommonContainer>
          <div className='relative border border-grayDark px-8  py-12 lg:flex lg:items-center lg:justify-between lg:px-20'>
            <div className='relative after:absolute after:right-[-60px] after:top-1/2 after:h-[132px] after:w-px after:-translate-y-1/2 after:bg-[#BDC4D0]'>
              <div className='lg:hidden'>
                <SectionTitle title='Contact' subtitle='お問い合わせ' />
              </div>
              <div className='hidden lg:block'>
                <h3 className='font-Montserrat text-2xl font-bold tracking-wider'>Contact</h3>
              </div>
              <p className='mt-2'>
                写真撮影、映像制作等
                <br />
                お気軽にお問い合わせください。
              </p>
            </div>
            <div className='mt-6'>
              <CtaButtons />
            </div>
          </div>
        </CommonContainer>
      </section>
    </>
  )
}
