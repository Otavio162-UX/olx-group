'use client'

import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

const RichMaterialsBlogPresentationShape = memo((): JSX.Element => {
  const blogType = useGetBlogType()

  return (
    <div
      className={twMerge(
        blogType,
        'absolute -bottom-10 -right-[11rem] -z-[1] flex gap-4 stroke-theme-blog-presentation-shape',
        'lg:bottom-0 lg:-right-[50rem]'
      )}
    >
      <svg
        width="1093"
        height="262"
        viewBox="0 0 1093 262"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge('w-[47rem]', 'lg:w-[68.3125rem]')}
      >
        <mask id="path-1-inside-1_963_31448" fill="white">
          <path d="M1092.86 248.052C1092.86 385.047 981.366 496.104 843.829 496.104C706.292 496.104 594.797 385.047 594.797 248.052C594.797 111.057 706.292 0 843.829 0C981.366 0 1092.86 111.057 1092.86 248.052ZM690.871 248.052C690.871 332.196 759.353 400.408 843.829 400.408C928.306 400.408 996.787 332.196 996.787 248.052C996.787 163.908 928.306 95.6962 843.829 95.6962C759.353 95.6962 690.871 163.908 690.871 248.052Z" />
        </mask>
        <path
          d="M1092.86 248.052C1092.86 385.047 981.366 496.104 843.829 496.104C706.292 496.104 594.797 385.047 594.797 248.052C594.797 111.057 706.292 0 843.829 0C981.366 0 1092.86 111.057 1092.86 248.052ZM690.871 248.052C690.871 332.196 759.353 400.408 843.829 400.408C928.306 400.408 996.787 332.196 996.787 248.052C996.787 163.908 928.306 95.6962 843.829 95.6962C759.353 95.6962 690.871 163.908 690.871 248.052Z"
          strokeWidth="6"
          mask="url(#path-1-inside-1_963_31448)"
        />
        <rect
          x="2.56066"
          y="1.06066"
          width="179.199"
          height="518.467"
          transform="matrix(1 0 0.707107 0.707107 -0.101562 0.663199)"
          strokeWidth="3"
        />
      </svg>

      <svg
        width="109"
        height="262"
        viewBox="0 0 109 262"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={twMerge(
          'hidden',
          'lg:block lg:w-[65rem] lg:-ml-[28.125rem]'
        )}
      >
        <rect
          width="182.199"
          height="521.467"
          strokeWidth="3"
          transform="matrix(-1 0 -0.707107 0.707107 551.795 0.352539)"
        />
      </svg>
    </div>
  )
})

RichMaterialsBlogPresentationShape.displayName =
  'RichMaterialsBlogPresentationShape'

export { RichMaterialsBlogPresentationShape }
