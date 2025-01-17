'use client'

import { forwardRef, Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import { titleVariants, TTitle } from '.'

const Title = forwardRef(
  (
    { tag: Tag = 'h1', className, children, ...props }: TTitle,
    ref: Ref<HTMLHeadingElement>
  ) => {
    return (
      <Tag
        ref={ref}
        className={twMerge('font-bold', titleVariants[Tag], className)}
        {...props}
      >
        {children}
      </Tag>
    )
  }
)

Title.displayName = 'Title'

export { Title }
