'use client'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

import Image from 'next/image'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [
  '/images/about-slider_01.jpg',
  '/images/about-slider_02.jpg',
  '/images/about-slider_03.jpg',
  '/images/about-slider_04.jpg',
  '/images/about-slider_05.jpg',
  '/images/about-slider_06.jpg',
  '/images/about-slider_01.jpg',
  '/images/about-slider_02.jpg',
  '/images/about-slider_03.jpg',
  '/images/about-slider_04.jpg',
  '/images/about-slider_05.jpg',
  '/images/about-slider_06.jpg',
]

export function SliderImages() {
  const slideSettings = {
    0: {
      slidesPerView: 3,
      spaceBetween: 0,
    },
    1024: {
      slidesPerView: 6,
      spaceBetween: 0,
    },
  }

  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={slideSettings}
        slidesPerView={'auto'}
        centeredSlides={true}
        allowTouchMove={false}
        loop={true}
        className='ease-linear'
        speed={5000}
        autoplay={{
          delay: 0,
        }}
      >
        {images.map((src: string, index: number) => (
          <SwiperSlide key={index} className='ease-linear'>
            <Image
              src={src}
              width={1000}
              height={1000}
              className='object-cover h-full'
              alt=''
              sizes='(min-width: 1024px) 100vw, 60vw'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
