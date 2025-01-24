import { Button } from '@/components/generic/atoms/Button'
import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { twMerge } from 'tailwind-merge'
import { IHomeBlogArticleCard } from './HomeBlogArticleCard.interface'
import { homeBlogArticleCardProps } from './variables/homeBlogArticleCardProps'

const HomeBlogArticleCard = ({
  imageSrc,
  buttonTitle,
  newsTitle,
  newsDescription,
  timeOlx,
  date,
  readTime,
  variant,
}: IHomeBlogArticleCard): JSX.Element => {
  const { ballClassNameVariants, buttonClassNameVariants } =
    homeBlogArticleCardProps

  return (
    <div className={twMerge('w-full flex', 'lg:flex-col lg:gap-6')}>
      <ImageComponent
        src={imageSrc}
        alt="news-image"
        width={144}
        height={95}
        className={twMerge(
          'object-cover w-[9rem] h-[5.9375rem] rounded-md',
          'lg:rounded-lg lg:h-[18.75rem] lg:w-full'
        )}
      />

      <div className={twMerge('p-2', 'lg:p-0 lg:flex lg:flex-col lg:gap-6')}>
        <div className="w-full flex flex-col gap-2">
          <Button
            className={twMerge(
              'max-w-max text-[.625rem] px-2 py-0.5 rounded-sm text-neutral-120',
              'lg:px-3 lg:py-2 lg:text-sm lg:rounded-lg',
              buttonClassNameVariants[variant]
            )}
          >
            {buttonTitle}
          </Button>

          <Title
            tag="h4"
            className={twMerge(
              'font-ZonaPro text-sm font-semibold text-neutral-130 line-clamp-3',
              'lg:line-clamp-2 lg:text-2xl'
            )}
          >
            {newsTitle}
          </Title>

          <Text
            tag="p"
            className={twMerge('hidden', 'lg:text-xl lg:text-neutral-110')}
          >
            {newsDescription}
          </Text>
        </div>

        <div className={twMerge('hidden', 'lg:flex lg:items-center lg:gap-4')}>
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
    </div>
  )
}

export { HomeBlogArticleCard }
