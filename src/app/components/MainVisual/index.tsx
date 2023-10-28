export default function MainVisual() {
  return (
    <section className='relative'>
      <video src='/sample-10s.mp4' muted loop autoPlay playsInline className='w-full h-auto' />
      <h2 className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-semibold'>
        人と出会い、感動を深める。
      </h2>
    </section>
  )
}
