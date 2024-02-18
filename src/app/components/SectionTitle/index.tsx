import { montserrat } from '@/app/util/fonts'

type Props = {
  title: string
  subtitle: string
}

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <section>
      <div className='relative'>
        <h2
          className={`${montserrat.className} text-2xl md:text-4xl relative w-fit after:absolute after:border-t-2 after:border-black after:inline-block after:w-36 after:ml-6 after:top-1/2`}
        >
          {title}
        </h2>
        <p className='mt-1 text-xs'>{subtitle}</p>
      </div>
    </section>
  )
}
