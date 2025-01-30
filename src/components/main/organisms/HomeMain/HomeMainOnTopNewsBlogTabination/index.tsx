'use client'

import { Button } from '@/components/generic/atoms/Button'
import { Title } from '@/components/generic/atoms/Title'
import { LoadingContainer } from '@/components/generic/molecules/LoadingContainer'
import { Tabination } from '@/components/generic/organisms/Tabination'
import { HomeMainNewsCard } from '@/components/main/organisms/HomeMain/HomeMainNewsCard'
import { homeMainOnTopNewsButtonsTab } from '@/components/main/templates/HomeMain/HomeMainOnTopNews/arrays/homeMainOnTopNews'
import { InternalRoutes } from '@/routes/routes'
import { mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { SwiperSlide } from 'swiper/react'
import { twMerge } from 'tailwind-merge'
import { useGetAllPost } from './hooks/useGetAllPost'

const Swiper = dynamic(async () => (await import('swiper/react')).Swiper, {
  ssr: false,
  loading: () => <LoadingContainer wrapperElementClassName="h-[25.25rem]" />,
})

const HomeMainOnTopNewsBlogTabination = (): JSX.Element => {
  const allPost = useGetAllPost()

  return (
    <div className="flex flex-col gap-4 mb-4">
      <Tabination
        wrapperRightComponentClassName={twMerge(
          'flex-col gap-4',
          'lg:flex-row lg:items-center'
        )}
        tabinationButtonsWrapperClassName="max-w-max"
        RightComponent={
          <Title tag={'h3'} variant="titleTab">
            Blog
          </Title>
        }
        buttonsTab={homeMainOnTopNewsButtonsTab}
      >
        {allPost.map((post, indexPost) => (
          <Swiper
            key={`home-on-top-news-blog-tabination-${indexPost}`}
            slidesPerView={'auto'}
            spaceBetween={32}
            className="mt-4 cursor-grab active:cursor-grabbing"
          >
            {post.map((card, indexCard) => (
              <SwiperSlide
                key={`slide-home-on-news-blog-${indexPost}-${indexCard}`}
                className="max-w-[308px]"
              >
                <HomeMainNewsCard {...card} />
              </SwiperSlide>
            ))}
          </Swiper>
        ))}
      </Tabination>

      <div className="flex items-center gap-4 mx-auto">
        <Link href={InternalRoutes.BLOG_IMMOBILE}>
          <Button
            variant="tertiary"
            className={twMerge(
              'flex items-center gap-2 px-[1.375rem] py-3 text-base',
              'lg:px-6 lg:py-4 lg:gap-6'
            )}
          >
            Blog Imóveis
            <Icon path={mdiChevronRight} size={1} />
          </Button>
        </Link>

        <Link href={InternalRoutes.BLOG_AUTOS}>
          <Button
            variant="tertiary"
            className={twMerge(
              'flex items-center px-7 py-3 text-base',
              'lg:px-6 lg:py-4 lg:gap-6'
            )}
          >
            Blog Autos
            <Icon path={mdiChevronRight} size={1} />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export { HomeMainOnTopNewsBlogTabination }
