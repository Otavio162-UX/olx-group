'use client'

import { HomeBlogBackgroundImageShadow } from '@/components/blog/molecules/HomeBlog/HomeBlogBackgroundImageShadow'
import { CategoryCard } from '@/components/generic/atoms/CategoryCard'
import { Title } from '@/components/generic/atoms/Title'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { InternalRoutes } from '@/routes/routes'
import { mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { THomeBlogSmallGalleryCard } from './HomeBlogSmallGalleryCard.interface'

const HomeBlogSmallGalleryCard = ({
  imageSrc,
  newsTitle,
  buttonNewsCategory,
  newsId,
}: THomeBlogSmallGalleryCard): JSX.Element => {
  const blogType = useGetBlogType()

  return (
    <div className="relative rounded-2xl h-full overflow-hidden px-8 py-6">
      <HomeBlogBackgroundImageShadow imageSrc={imageSrc} />

      <div className="flex flex-col h-full">
        <CategoryCard variant={blogType}>{buttonNewsCategory}</CategoryCard>

        <div className="mt-auto flex items-center">
          <Title className="line-clamp-2 text-neutral-70 flex-1 font-ZonaPro text-2xl font-semibold">
            {newsTitle}
          </Title>

          <Link href={InternalRoutes.BLOG_POST(blogType, newsId)}>
            <Icon path={mdiChevronRight} size={1} className="text-neutral-70" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export { HomeBlogSmallGalleryCard }
