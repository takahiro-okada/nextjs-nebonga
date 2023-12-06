type Props = {
  title: string
  subtitle: string
}

export default function PageTitle({ title, subtitle }: Props) {
  return (
    <div className='mt-10'>
      <h2 className='text-5xl'>{title}</h2>
      <p className='mt-3'>{subtitle}</p>
    </div>
  )
}
