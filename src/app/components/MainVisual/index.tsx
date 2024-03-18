import { montserrat } from '../util/fonts'

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
          className='aspect-square h-screen w-full object-cover'
        />
        <div className='absolute left-0 top-0 size-full bg-black opacity-50'></div>

        <div className='absolute right-1/2 top-1/2 z-10 w-full -translate-y-1/2 translate-x-1/2 text-center'>
          <p className='text-[14px] text-white delay-150'>人と出会い、感動を深める。</p>
          <p className={`${montserrat.className} mt-1 text-[48px] font-semibold text-white delay-300 md:text-8xl`}>
            NeBonga
          </p>
          <p className={`${montserrat.className} mt-1 text-center text-[10px] tracking-widest text-white`}>
            Forge connections, deepen emotions
          </p>
        </div>
      </section>
    </div>
  )
}
