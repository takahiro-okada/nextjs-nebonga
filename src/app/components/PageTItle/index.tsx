import { montserrat } from '../util/fonts'

type Props = {
  title: string
  subtitle: string
}

export default function PageTitle({ title, subtitle }: Props) {
  return (
    <div className='mt-10'>
      <h2 className={`text-center text-4xl font-bold md:text-6xl ${montserrat.className}`}>{title}</h2>
      <p className='mt-3 text-center'>{subtitle}</p>
    </div>
  )
}
