'use client'

import { Title } from '@/components/generic/atoms/Title'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { twMerge } from 'tailwind-merge'
import { IHomeBlogTitleGroup } from './HomeBlogTitleGroup.interface'

const HomeBlogTitleGroup = ({
  title,
  textHighlight,
}: IHomeBlogTitleGroup): JSX.Element => {
  const blogType = useGetBlogType()

  return (
    <div className={twMerge(blogType, 'flex flex-col gap-2')}>
      <Title
        tag="h5"
        className={twMerge(
          'text-xl text-theme-blog-secondary-color-100 text-center',
          'lg:text-2xl'
        )}
      >
        {textHighlight}
      </Title>

      <Title
        tag="h2"
        className={twMerge(
          'text-neutral-120 text-[2rem] font-ZonaPro text-center',
          'lg:text-5xl'
        )}
      >
        {title}
      </Title>
    </div>
  )
}

export { HomeBlogTitleGroup }
