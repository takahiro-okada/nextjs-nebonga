import { montserrat } from '../../util/fonts'

export default function MainVisual() {
  return (
    <div className='m-view-full max-w-[100vw]'>
      <section className='relative'>
        <video
          src='/images/top.mp4'
          muted
          loop
          autoPlay
          playsInline
          className='h-screen w-full object-cover aspect-square'
        />
        <div className='absolute left-0 top-0 h-full w-full bg-black opacity-50'></div>

        <div className='absolute right-1/2 top-1/2 z-10 -translate-y-1/2 translate-x-1/2 text-center w-full'>
          <p className='text-white text-[14px] delay-150'>人と出会い、感動を深める。</p>
          <p className='mt-1 text-[48px] text-white delay-300 md:text-8xl'>NeBonga</p>
          <p className={`${montserrat.className} mt-1 text-[10px] tracking-widest text-center text-white`}>
            Forge connections, deepen emotions
          </p>
        </div>
      </section>
    </div>
  )
}
