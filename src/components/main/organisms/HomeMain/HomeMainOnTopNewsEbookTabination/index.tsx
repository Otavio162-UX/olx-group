'use client'

import { Button } from '@/components/generic/atoms/Button'
import { Title } from '@/components/generic/atoms/Title'
import { LoadingContainer } from '@/components/generic/molecules/LoadingContainer'
import { EbookCard } from '@/components/generic/organisms/EbookCard'
import { Tabination } from '@/components/generic/organisms/Tabination'
import { homeMainOnTopNewsButtonsTab } from '@/components/main/templates/HomeMain/HomeMainOnTopNews/arrays/homeMainOnTopNews'
import { InternalRoutes } from '@/routes/routes'
import { mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { SwiperSlide } from 'swiper/react'
import { twMerge } from 'tailwind-merge'
import { homeMainOnTopNewsEbookTabination } from './arrays/homeMainOnTopNewsEbookTabination'

const Swiper = dynamic(async () => (await import('swiper/react')).Swiper, {
  ssr: false,
  loading: () => <LoadingContainer wrapperElementClassName="h-[15.625rem]" />,
})

const HomeMainOnTopNewsEbookTabination = (): JSX.Element => {
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
            E-books
          </Title>
        }
        buttonsTab={homeMainOnTopNewsButtonsTab}
      >
        {homeMainOnTopNewsEbookTabination.map((slide, indexSlide) => (
          <Swiper
            key={`home-on-top-news-blog-tabination-${indexSlide}`}
            slidesPerView={'auto'}
            spaceBetween={24}
            className="mt-4 cursor-grab active:cursor-grabbing"
          >
            {slide.map((card, indexCard) => (
              <SwiperSlide
                key={`slide-home-on-news-ebook-${indexSlide}-${indexCard}`}
                className="max-w-[19.625rem] py-4"
              >
                <EbookCard {...card} />
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
              'flex items-center gap-2 px-2 py-3 text-base',
              'lg:px-6 lg:py-4 lg:gap-6'
            )}
          >
            E-books Imóveis
            <Icon path={mdiChevronRight} size={1} />
          </Button>
        </Link>

        <Link href={InternalRoutes.BLOG_AUTOS}>
          <Button
            variant="tertiary"
            className={twMerge(
              'flex items-center px-4 py-3 text-base',
              'lg:px-6 lg:py-4 lg:gap-6'
            )}
          >
            E-books Autos
            <Icon path={mdiChevronRight} size={1} />
          </Button>
        </Link>
      </div>
    </div>
  )
}

export { HomeMainOnTopNewsEbookTabination }
