'use client'

import dynamic from 'next/dynamic'
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import { twMerge } from 'tailwind-merge'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { LoadingContainer } from '@/components/generic/molecules/LoadingContainer'
import { homeMainSlide } from './arrays/homeMainSlide'

import './styles.css'

const Swiper = dynamic(async () => (await import('swiper/react')).Swiper, {
  ssr: false,
  loading: () => <LoadingContainer wrapperElementClassName="h-[15.625rem]" />,
})

const HomeMainSlide = (): JSX.Element => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      loop
      pagination={{
        clickable: true,
      }}
      navigation
      modules={[Pagination, Navigation]}
      className={twMerge(
        'w-full h-[24.75rem] cursor-grab active:cursor-grabbing',
        'lg:h-[45rem]'
      )}
    >
      {homeMainSlide.map((image, indexImage) => (
        <SwiperSlide key={`home-slide-image-${indexImage}`}>
          <ImageComponent
            src={image}
            alt="slide-image"
            width={390}
            height={396}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export { HomeMainSlide }
