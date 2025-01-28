import { HomeBlogCategoryGroup } from '@/components/blog/molecules/HomeBlog/HomeBlogCategoryGroup'
import { HomeBlogNewsGallery } from '@/components/blog/organisms/HomeBlog/HomeBlogNewsGallery'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { twMerge } from 'tailwind-merge'
import { IHomeBlogLastNews } from './HomeBlogLastNews.interface'

const HomeBlogLastNews = ({
  title,
  subtitle,
  homeBlogNewsGallery,
}: IHomeBlogLastNews): JSX.Element => {
  return (
    <section
      className={twMerge(
        'pt-9 flex flex-col gap-3 pb-6',
        'lg:pt-[3.4rem] lg:gap-7 lg:pb-10',
        'xl:pt-[4.3125rem] xl:gap-10'
      )}
    >
      <Title
        className={twMerge(
          'text-2xl font-ZonaPro text-center',
          'lg:text-[3rem] lg:leading-[1.12]',
          'xl:text-[4rem] xl:leading-[1.12]'
        )}
      >
        {title}
      </Title>

      <Text
        tag="p"
        className={twMerge(
          'text-base text-neutral-100 text-center',
          'lg:text-2xl'
        )}
      >
        {subtitle}
      </Text>

      <HomeBlogCategoryGroup />

      <HomeBlogNewsGallery homeBlogNewsGallery={homeBlogNewsGallery} />
    </section>
  )
}

export { HomeBlogLastNews }
