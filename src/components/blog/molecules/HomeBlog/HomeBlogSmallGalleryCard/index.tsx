import { HomeBlogBackgroundImageShadow } from '@/components/blog/molecules/HomeBlog/HomeBlogBackgroundImageShadow'
import { CategoryCard } from '@/components/generic/atoms/CategoryCard'
import { Title } from '@/components/generic/atoms/Title'
import { mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { THomeBlogSmallGalleryCard } from './HomeBlogSmallGalleryCard.interface'

const HomeBlogSmallGalleryCard = ({
  imageSrc,
  newsTitle,
  buttonNewsCategory,
  link,
}: THomeBlogSmallGalleryCard): JSX.Element => {
  return (
    <div className="relative rounded-2xl h-full overflow-hidden px-8 py-6">
      <HomeBlogBackgroundImageShadow imageSrc={imageSrc} />

      <div className="flex flex-col h-full">
        <CategoryCard variant="immobile">{buttonNewsCategory}</CategoryCard>

        <div className="mt-auto flex items-center">
          <Title className="line-clamp-2 text-neutral-70 flex-1 font-ZonaPro text-2xl font-semibold">
            {newsTitle}
          </Title>

          <Link href={link}>
            <Icon path={mdiChevronRight} size={1} className="text-neutral-70" />
          </Link>
        </div>
      </div>
    </div>
  )
}

export { HomeBlogSmallGalleryCard }
