'use client'

import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { twMerge } from 'tailwind-merge'

const HomeBlogSubscribeImage = (): JSX.Element => {
  const blogType = useGetBlogType()

  return (
    <ImageComponent
      src={`/blog/home/${blogType}SubscribeImage.svg`}
      alt="house-image"
      width={640}
      height={640}
      className={twMerge(
        'hidden',
        'lg:flex lg:w-[28rem] lg:h-[28rem]',
        'xl:w-[40rem] xl:lg:h-[40] z-10'
      )}
    />
  )
}

export { HomeBlogSubscribeImage }
