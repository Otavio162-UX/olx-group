import { CategoryCard } from '@/components/generic/atoms/CategoryCard'
import { ColorfulEmptyCircle } from '@/components/generic/atoms/ColorfulEmptyCircle'
import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { InternalRoutes } from '@/routes/routes'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IBlogArticleCard } from './BlogArticleCard.interface'

const BlogArticleCard = ({
  imageSrc,
  buttonTitle,
  newsTitle,
  newsDescription,
  timeOlx,
  date,
  readTime,
  newsId,
}: IBlogArticleCard): JSX.Element => {
  const blogType = useGetBlogType()

  return (
    <Link href={InternalRoutes.BLOG_POST(blogType, newsId)}>
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
            <CategoryCard variant={blogType} version="smaller">
              {buttonTitle}
            </CategoryCard>

            <Title
              tag="h4"
              className={twMerge(
                'font-ZonaPro text-sm font-semibold text-neutral-130 line-clamp-3',
                'lg:line-clamp-2 lg:text-2xl'
              )}
              title={newsTitle}
            >
              {newsTitle}
            </Title>

            <Text
              tag="p"
              className={twMerge(
                'hidden',
                'lg:text-xl lg:text-neutral-110 lg:line-clamp-1'
              )}
              title={newsDescription}
            >
              {newsDescription}
            </Text>
          </div>

          <div
            className={twMerge('hidden', 'lg:flex lg:items-center lg:gap-4')}
          >
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
      </div>
    </Link>
  )
}

export { BlogArticleCard }
