export default function MainVisual() {
  return (
    <section className='relative'>
      <video src='/sample-10s.mp4' muted loop autoPlay playsInline className='h-auto w-full' />
      <div className='mx-3 mt-32 max-w-3xl'>
        <h2 className='text-3xl'>人と出会い、感動を深める。</h2>
        <p className='mt-3 text-center'>Forge connections, deepen emotions</p>
      </div>
    </section>
  )
}
