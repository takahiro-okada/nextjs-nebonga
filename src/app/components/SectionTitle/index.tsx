type Props = {
  title: string
  subtitle: string
}

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <section className='mt-16 flex items-center'>
      <h2 className='text-3xl'>{title}</h2>
      <span className='ml-5 text-xs'>ー {subtitle}</span>
    </section>
  )
}
