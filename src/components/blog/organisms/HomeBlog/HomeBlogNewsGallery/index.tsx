'use client'

import { HomeBlogGalleryMobileCard } from '@/components/blog/molecules/HomeBlog/HomeBlogGalleryMobileCard'
import { HomeBlogMainGalleryCard } from '@/components/blog/molecules/HomeBlog/HomeBlogMainGalleryCard'
import { HomeBlogSmallGalleryCard } from '@/components/blog/molecules/HomeBlog/HomeBlogSmallGalleryCard'
import { LoadingContainer } from '@/components/generic/molecules/LoadingContainer'
import dynamic from 'next/dynamic'
import { Navigation, Pagination } from 'swiper/modules'
import { SwiperSlide } from 'swiper/react'
import { twMerge } from 'tailwind-merge'
import { useHomeBlogNewsGalleryProps } from './hooks/useHomeBlogNewsGalleryProps'

import './styles.css'

const Swiper = dynamic(async () => (await import('swiper/react')).Swiper, {
  ssr: false,
  loading: () => (
    <LoadingContainer
      wrapperElementClassName={twMerge('h-[23.4375rem]', 'lg:h-[35rem]')}
    />
  ),
})

const HomeBlogNewsGallery = (): JSX.Element => {
  const [mainGallery, ...restGallery] = useHomeBlogNewsGalleryProps()

  return (
    <section>
      <div
        className={twMerge(
          'hidden',
          'lg:w-full lg:grid lg:grid-cols-[1fr_400px] lg:h-[35rem] lg:gap-4'
        )}
      >
        <HomeBlogMainGalleryCard {...mainGallery} />

        <div className="grid gap-4 h-full">
          {restGallery.map((item, indexItem) => (
            <HomeBlogSmallGalleryCard
              key={`home-blog-small-gallery-${indexItem}`}
              {...item}
            />
          ))}
        </div>
      </div>

      <div className={twMerge('block', 'lg:hidden')}>
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          loop
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          {[mainGallery, ...restGallery].map((item, indexItem) => (
            <SwiperSlide
              className={twMerge('mt-6 pb-8')}
              key={`home-blog-small-gallery-slide-${indexItem}`}
            >
              <HomeBlogGalleryMobileCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export { HomeBlogNewsGallery }
