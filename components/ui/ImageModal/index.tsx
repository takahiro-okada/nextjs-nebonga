import Image from 'next/image'

type ImageModalProps = {
  alt: string
  height: number
  onClose: () => void
  src: string
  width: number
}

export default function ImageModal(props: ImageModalProps) {
  const { alt, height, onClose, src, width } = props
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4' onClick={onClose}>
      <div className='w-full max-w-3xl rounded-lg bg-white p-4 shadow-lg' onClick={(e) => e.stopPropagation()}>
        <Image src={src} alt={alt} width={width} height={height} className='rounded-md' />
        <div className='text-center'>
          <button className='mt-6 min-w-52 rounded-full bg-black px-9 py-2 text-center text-white' onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
