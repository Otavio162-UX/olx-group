'use client'

import { LoadingContainer } from '@/components/generic/molecules/LoadingContainer'
import dynamic from 'next/dynamic'
import { twMerge } from 'tailwind-merge'

import { HomeBlogNewsGalleryDesktop } from '@/components/blog/molecules/HomeBlog/HomeBlogNewsGalleryDesktop'
import { IHomeBlogNewsGallery } from './HomeBlogNewsGallery.interface'

const HomeBlogNewsGalleryMobile = dynamic(
  async () =>
    (
      await import(
        '@/components/blog/molecules/HomeBlog/HomeBlogNewsGalleryMobile'
      )
    ).HomeBlogNewsGalleryMobile,
  {
    ssr: false,
    loading: () => (
      <LoadingContainer
        wrapperElementClassName={twMerge('h-[23.4375rem]', 'lg:h-[35rem]')}
      />
    ),
  }
)

const HomeBlogNewsGallery = ({
  homeBlogNewsGallery,
}: IHomeBlogNewsGallery): JSX.Element => {
  return (
    <section>
      <HomeBlogNewsGalleryDesktop homeBlogNewsGallery={homeBlogNewsGallery} />

      <HomeBlogNewsGalleryMobile homeBlogNewsGallery={homeBlogNewsGallery} />
    </section>
  )
}

export { HomeBlogNewsGallery }
