'use client'

import { BlogSubscribeImage } from '@/components/blog/atoms/BlogSubscribe/BlogSubscribeImage'
import { PostBlogSocialMedia } from '@/components/blog/molecules/PostBlog/PostBlogSocialMedia'
import { Button } from '@/components/generic/atoms/Button'
import { CategoryCard } from '@/components/generic/atoms/CategoryCard'
import { Title } from '@/components/generic/atoms/Title'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { twMerge } from 'tailwind-merge'
import { IPostBlogMainImageContainer } from './PostBlogMainImageContainer.interface'
import { postBlogMainImageProps } from './variables/postBlogMainImageProps'

const PostBlogMainImageContainer = ({
  tailwindBackgroundImageClassName,
  categoriesTags,
  postSocialMedia,
}: IPostBlogMainImageContainer): JSX.Element => {
  const blogType = useGetBlogType()

  const { blogDefaultImageClassName } = postBlogMainImageProps

  return (
    <div>
      <div
        className={twMerge('rounded-3xl overflow-hidden', 'lg:rounded-b-none')}
      >
        <div
          className={twMerge(
            tailwindBackgroundImageClassName,
            'bg-cover p-6 flex flex-col items-center h-[22.625rem]',
            'lg:p-8 lg:items-end lg:h-[37.5rem]'
          )}
        >
          <div className="flex items-center gap-6">
            {categoriesTags.map((categoryTag, indexCategoryTag) => (
              <CategoryCard
                key={`category-tag-${indexCategoryTag}`}
                variant={blogType}
                version="smaller"
                className="text-sm px-3 py-2 font-NunitoSans text-neutral-120"
              >
                {categoryTag}
              </CategoryCard>
            ))}
          </div>

          <div className="flex gap-2 mt-auto">
            {postSocialMedia.map((socialMedia, indexSocialMedia) => (
              <PostBlogSocialMedia
                key={`post-social-media-${indexSocialMedia}`}
                {...socialMedia}
              />
            ))}
          </div>
        </div>
      </div>

      <div
        className={twMerge(
          'hidden',
          'lg:flex lg:flex-1 lg:bg-theme-blog-secondary-color-100 py-8 rounded-b-3xl lg:relative lg:pr-10 lg:pl-32 lg:justify-between lg:gap-10 lg:items-center'
        )}
      >
        <BlogSubscribeImage className={blogDefaultImageClassName[blogType]} />

        <Title
          tag="h3"
          className={twMerge('text-2xl text-neutral-70', 'xl:text-3xl')}
        >
          Planos para acelerar seu negócio
        </Title>

        <div className="flex items-center gap-4">
          <Button className="border bg-theme-blog-secondary-color-100 border-neutral-70 py-3 px-6 rounded-xl hover:bg-theme-blog-secondary-color-100 active:bg-theme-blog-secondary-color-100">
            Receba uma ligação
          </Button>

          <Button className="bg-neutral-70 text-theme-blog-secondary-color-100 py-3 px-6 rounded-xl hover:bg-neutral-70 active:bg-neutral-70">
            Conheça nossos planos
          </Button>
        </div>
      </div>
    </div>
  )
}

export { PostBlogMainImageContainer }
