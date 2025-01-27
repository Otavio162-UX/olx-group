'use client'

import { HomeBlogMainGalleryCard } from '@/components/blog/molecules/HomeBlog/HomeBlogMainGalleryCard'
import { HomeBlogSmallGalleryCard } from '@/components/blog/molecules/HomeBlog/HomeBlogSmallGalleryCard'
import { IHomeBlogNewsGallery } from '@/components/blog/organisms/HomeBlog/HomeBlogNewsGallery/HomeBlogNewsGallery.interface'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { twMerge } from 'tailwind-merge'

const HomeBlogNewsGalleryDesktop = ({
  homeBlogNewsGallery: [mainGallery, ...restGallery],
}: IHomeBlogNewsGallery): JSX.Element => {
  const blogType = useGetBlogType()

  return (
    <div
      className={twMerge(
        blogType,
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
  )
}

export { HomeBlogNewsGalleryDesktop }
