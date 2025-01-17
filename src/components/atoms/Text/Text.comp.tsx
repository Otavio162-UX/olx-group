'use client'

import { forwardRef, Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import { IText, textVariants } from '.'

const Text = forwardRef(
  (
    { variant = 'large', className, children, ...props }: IText,
    ref: Ref<HTMLParagraphElement>
  ): JSX.Element => {
    return (
      <p
        ref={ref}
        className={twMerge('font-normal ', textVariants[variant], className)}
        {...props}
      >
        {children}
      </p>
    )
  }
)

Text.displayName = 'Text'

export { Text }
