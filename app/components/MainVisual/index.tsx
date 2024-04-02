export default function MainVisual() {
  return (
    <section className='relative'>
      <video
        src='/images/top.mp4'
        muted
        loop
        autoPlay
        playsInline
        className='aspect-square h-screen w-full object-cover'
      />
      <div className='absolute left-0 top-0 size-full bg-black opacity-50'></div>

      <div className='absolute right-1/2 top-1/2 z-10 w-full -translate-y-1/2 translate-x-1/2 text-center'>
        <p className='text-[14px] text-white delay-150'>より良い世界を創る</p>
        <p className='mt-1 font-Montserrat text-[48px] font-semibold text-white delay-300 md:text-8xl'>NeBonga</p>
        <p className='mt-1 text-center font-Montserrat text-[10px] tracking-widest text-white'>Create a better world</p>
      </div>
    </section>
  )
}
