'use client'

import { Title } from '@/components/generic/atoms/Title'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { twMerge } from 'tailwind-merge'
import { IPostBlogIntroTitle } from './PostBlogIntroTitle.interface'

const PostBlogIntroTitle = ({
  className,
  children,
}: IPostBlogIntroTitle): JSX.Element => {
  const blogType = useGetBlogType()

  return (
    <Title
      tag="h2"
      className={twMerge(
        blogType,
        'font-ZonaPro text-[2rem] font-semibold text-theme-blog-post-intro-title-color',
        'lg:text-[2.5rem]',
        className
      )}
    >
      {children}
    </Title>
  )
}

export { PostBlogIntroTitle }
