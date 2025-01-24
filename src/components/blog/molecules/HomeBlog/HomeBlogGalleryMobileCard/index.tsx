import { HomeBlogBackgroundImageShadow } from '@/components/blog/molecules/HomeBlog/HomeBlogBackgroundImageShadow'
import { IHomeBlogMainGalleryCard } from '@/components/blog/molecules/HomeBlog/HomeBlogMainGalleryCard/HomeBlogMainGalleryCard.interface'
import { Button } from '@/components/generic/atoms/Button'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'

const HomeBlogGalleryMobileCard = ({
  imageSrc,
  link,
  buttonNewsCategory,
  readTime,
  newsTitle,
  newsDescription,
}: IHomeBlogMainGalleryCard): JSX.Element => {
  return (
    <div className="w-full rounded-2xl overflow-hidden px-4 py-5 h-[21.875rem] relative flex flex-col">
      <HomeBlogBackgroundImageShadow imageSrc={imageSrc} />

      <div
        className={twMerge(
          'mt-auto flex flex-col gap-4',
          'md:flex-row md:items-center'
        )}
      >
        <div className="flex-1">
          <div className="flex items-center gap-4">
            <Button
              variant="clean"
              className="px-2 py-1 text-neutral-120 text-xs font-semibold bg-orange-70 rounded-[.25rem] font-NunitoSans"
            >
              {buttonNewsCategory}
            </Button>

            <Text tag="p" className="font-semibold text-xs text-neutral-70">
              {readTime}
            </Text>
          </div>

          <div>
            <Title
              tag="h3"
              className={twMerge(
                'font-ZonaPro font-semibold text-neutral-70 text-2xl line-clamp-1 leading=[1.32]',
                'md:flex-1'
              )}
              title={newsTitle}
            >
              {newsTitle}
            </Title>

            <Text
              tag="p"
              className="text-neutral-70 text-sm line-clamp-1"
              title={newsDescription}
            >
              {newsDescription}
            </Text>
          </div>
        </div>

        <div className={twMerge('mt-2 flex justify-between gap-2', 'md:gap-4')}>
          <Link href={link}>
            <Button
              className={twMerge(
                'bg-orange-100 hover:bg-orange-110 active:bg-orange-110 text-sm flex items-center gap-2 h-max px-5 py-3'
              )}
            >
              Matéria completa
            </Button>
          </Link>

          <Link href={link}>
            <Button
              className={twMerge(
                'bg-transparent hover:bg-transparent border border-neutral-70 text-sm active:bg-transparent flex items-center gap-2 h-max px-5 py-3'
              )}
            >
              Mais em inovação
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export { HomeBlogGalleryMobileCard }
