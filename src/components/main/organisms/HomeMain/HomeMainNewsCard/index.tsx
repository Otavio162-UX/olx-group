import { CategoryCard } from '@/components/generic/atoms/CategoryCard'
import { ColorfulEmptyCircle } from '@/components/generic/atoms/ColorfulEmptyCircle'
import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { InternalRoutes } from '@/routes/routes'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IHomeMainNewsCard } from './HomeMainNewsCard.interface'

const HomeMainNewsCard = ({
  imageSrc,
  buttonTitle,
  newsTitle,
  newsDescription,
  timeOlx,
  date,
  readTime,
  blogType,
  newsId,
}: IHomeMainNewsCard): JSX.Element => {
  return (
    <Link href={InternalRoutes.BLOG_POST(blogType, newsId)}>
      <div className="w-full flex flex-col gap-6">
        <ImageComponent
          src={imageSrc}
          alt="news-image"
          width={308}
          height={160}
          className={twMerge('object-cover w-full rounded-lg h-[10rem]')}
        />

        <div className="w-full flex flex-col gap-2">
          <CategoryCard variant={blogType}>{buttonTitle}</CategoryCard>

          <Title
            tag="h4"
            className="font-ZonaPro font-semibold text-2xl text-neutral-130 line-clamp-2"
            title={newsTitle}
          >
            {newsTitle}
          </Title>

          <Text
            tag="p"
            className="text-xl text-neutral-110 line-clamp-1"
            title={newsDescription}
          >
            {newsDescription}
          </Text>
        </div>

        <div className="flex items-center gap-4">
          <ColorfulEmptyCircle variant={blogType} />

          <div className="flex flex-col">
            <Text tag="p" className="text-xl text-neutral-100">
              {timeOlx}
            </Text>

            <Text tag="p" className="text-sm text-neutral-110">
              {date} <span>•</span> {readTime}
            </Text>
          </div>
        </div>
      </div>
    </Link>
  )
}

export { HomeMainNewsCard }
