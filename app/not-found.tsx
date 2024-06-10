import CommonContainer from '@/components/base/CommonContainer'
import PageTitle from '@/components/ui/PageTitle'

export default function Page() {
  return (
    <main className='mt-32'>
      <CommonContainer>
        <section>
          <PageTitle title='404' subtitle="The page you're looking for can't be found" />
        </section>
      </CommonContainer>
    </main>
  )
}
