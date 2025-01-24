import { Button } from '@/components/generic/atoms/Button'
import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { twMerge } from 'tailwind-merge'
import { IHomeMainNewsCard } from './HomeMainNewsCard.interface'
import { homeMainNewsCardProps } from './variables/homeMainNewsCardProps'

const HomeMainNewsCard = ({
  imageSrc,
  imageClassName,
  buttonTitle,
  newsTitle,
  newsDescription,
  timeOlx,
  date,
  readTime,
  variant,
}: IHomeMainNewsCard): JSX.Element => {
  const { ballClassNameVariants, buttonClassNameVariants } =
    homeMainNewsCardProps

  return (
    <div className="w-full flex flex-col gap-6">
      <ImageComponent
        src={imageSrc}
        alt="news-image"
        width={308}
        height={160}
        className={twMerge('object-cover w-full rounded-lg', imageClassName)}
      />

      <div className="w-full flex flex-col gap-2">
        <Button
          className={twMerge(
            'max-w-max px-3 py-2 text-sm rounded-lg text-neutral-120',
            buttonClassNameVariants[variant]
          )}
        >
          {buttonTitle}
        </Button>

        <Title
          tag="h4"
          className="font-ZonaPro font-semibold text-2xl text-neutral-130 line-clamp-2"
        >
          {' '}
          {newsTitle}
        </Title>

        <Text tag="p" className="text-xl text-neutral-110">
          {newsDescription}
        </Text>
      </div>

      <div className="flex items-center gap-4">
        <span
          className={twMerge(
            'w-12 h-12 rounded-full',
            ballClassNameVariants[variant]
          )}
        />

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
  )
}

export { HomeMainNewsCard }
