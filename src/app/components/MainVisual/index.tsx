export default function MainVisual() {
  return (
    <section className='relative'>
      <video src='/sample-10s.mp4' muted loop autoPlay playsInline className='h-auto w-full' />
      <div className='absolute left-0 top-0 h-full w-full rounded-xl bg-black opacity-50'></div>
      <div className='absolute right-1/2 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 text-center'>
        <p className='text-white delay-150'>人と出会い、感動を深める。</p>
        <p className='mt-4 text-5xl text-white delay-300 md:text-8xl'>NeBonga</p>
        <p className='mt-4 text-center text-white delay-450'>Forge connections, deepen emotions</p>
      </div>
    </section>
  )
}
