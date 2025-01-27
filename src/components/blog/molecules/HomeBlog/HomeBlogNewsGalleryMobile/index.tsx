'use client'

import { IHomeBlogNewsGallery } from '@/components/blog/organisms/HomeBlog/HomeBlogNewsGallery/HomeBlogNewsGallery.interface'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { twMerge } from 'tailwind-merge'
import { HomeBlogGalleryMobileCard } from '../HomeBlogGalleryMobileCard'

import './styles.css'

const HomeBlogNewsGalleryMobile = ({
  homeBlogNewsGallery,
}: IHomeBlogNewsGallery) => {
  const blogType = useGetBlogType()

  return (
    <div className={twMerge(blogType, 'block', 'lg:hidden')}>
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        loop
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
      >
        {homeBlogNewsGallery.map((item, indexItem) => (
          <SwiperSlide
            className={'mt-6 pb-8'}
            key={`home-blog-small-gallery-slide-${indexItem}`}
          >
            <HomeBlogGalleryMobileCard {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export { HomeBlogNewsGalleryMobile }
