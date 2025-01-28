'use client'

import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

const HomeBlogSubscribeCircleImage = memo((): JSX.Element => {
  const blogType = useGetBlogType()

  return (
    <svg
      width="585"
      height="568"
      viewBox="0 0 585 568"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge(
        blogType,
        'w-[48rem] h-[47.75rem] absolute -top-[0%] -right-[6.875rem]'
      )}
    >
      <path
        d="M62.3217 382.686C62.3217 559.524 206.481 703.404 384.961 703.404C563.44 703.404 707.6 559.524 707.6 382.686C707.6 205.848 563.44 61.9673 384.961 61.9673C206.481 61.9673 62.3217 205.848 62.3217 382.686Z"
        strokeWidth="122.91"
        className="stroke-theme-blog-subscribe-circle-color"
      />
    </svg>
  )
})

HomeBlogSubscribeCircleImage.displayName = 'HomeBlogSubscribeImage'

export { HomeBlogSubscribeCircleImage }
