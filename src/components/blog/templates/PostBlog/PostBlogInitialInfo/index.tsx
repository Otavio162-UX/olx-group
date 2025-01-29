'use client'

import { PostBlogMainImageContainer } from '@/components/blog/organisms/PostBlog/PostBlogMainImageContainer'
import { Text } from '@/components/generic/atoms/Text'
import { Title } from '@/components/generic/atoms/Title'
import { BreadCrumbs } from '@/components/generic/molecules/BreadCrumbs'
import { mdiClockTimeThreeOutline } from '@mdi/js'
import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'
import { usePostBlogInitialInfoProps } from './hooks/usePostBlogInitialInfoProps'
import { IPostBlogInitialInfo } from './PostBlogInitialInfo.interface'

const PostBlogInitialInfo = ({
  title,
  team,
  date,
  readTime,
  subtitle,
  categoriesTags,
  postSocialMedia,
  tailwindBackgroundImageClassName,
}: IPostBlogInitialInfo): JSX.Element => {
  const { blogType, paths } = usePostBlogInitialInfoProps()

  return (
    <section className={blogType}>
      <div className={twMerge('pt-2 pb-9', 'lg:py-4')}>
        <BreadCrumbs
          paths={paths}
          wrapperElementClassName="ml-2"
          textClassName="text-theme-blog-secondary-color-140 nth-last-child-2:text-theme-blog-secondary-color-100"
          iconClassName="text-theme-blog-secondary-color-140 nth-last-child-2:text-theme-blog-secondary-color-100"
        />
      </div>

      <div className="flex flex-col gap-4 mb-6">
        <Title
          tag="h2"
          className={twMerge(
            'text-2xl text-neutral-130 font-ZonaPro',
            'md:text-4xl',
            'lg:text-5xl'
          )}
        >
          {title}
        </Title>

        <Text
          tag="p"
          className={twMerge(
            'flex gap-4 text-neutral-100 mt-4 text-base items-center text-nowrap flex-wrap',
            'md:text-lg',
            'lg:text-xl'
          )}
        >
          {team} <Text tag="span">|</Text> {date}
          <Text tag="span">|</Text>
          <Icon path={mdiClockTimeThreeOutline} size={1} />
          {readTime}
        </Text>

        <Title
          tag="h6"
          className={twMerge(
            'text-sm text-neutral-100 max-w-[50rem] mt-2 mb-6',
            'md:text-base',
            'lg:text-lg'
          )}
        >
          {subtitle}
        </Title>
      </div>

      <PostBlogMainImageContainer
        categoriesTags={categoriesTags}
        postSocialMedia={postSocialMedia}
        tailwindBackgroundImageClassName={tailwindBackgroundImageClassName}
      />
    </section>
  )
}

export { PostBlogInitialInfo }
