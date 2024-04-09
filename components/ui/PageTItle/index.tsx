type Props = {
  title: string
  subtitle: string
}

export default function PageTitle({ title, subtitle }: Props) {
  return (
    <div className='mt-10'>
      <h2 className='text-center font-Montserrat text-4xl font-bold md:text-6xl'>{title}</h2>
      <p className='mt-3 text-center'>{subtitle}</p>
    </div>
  )
}
