type Props = {
  title: string
  bgImage: string
}

export default function PageMainVisual(props: Props) {
  //親コンポーネントから渡されたpropsを受け取る
  const { title, bgImage } = props

  return (
    <div className='relative h-96 bg-cover bg-center bg-no-repeat' style={{ backgroundImage: `url(${bgImage})` }}>
      <h2 className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-white'>
        {title}
      </h2>
    </div>
  )
}
