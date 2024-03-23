type Props = {
  title: string
  subtitle: string
}

export function SectionTitle({ title, subtitle }: Props) {
  return (
    <section>
      <div className='relative'>
        <h2 className='relative w-fit font-Montserrat text-2xl after:absolute after:top-1/2 after:ml-6 after:inline-block after:w-36 after:border-t-2 after:border-black md:text-4xl'>
          {title}
        </h2>
        <p className='mt-1 text-xs'>{subtitle}</p>
      </div>
    </section>
  )
}
