'use client'

import { Loading } from '@/components/atoms/Loading'
import { forwardRef, Ref } from 'react'
import { twMerge } from 'tailwind-merge'
import {
  buttonSizes,
  buttonVariants,
  disabledClassName,
  IButton,
  loadingClassName,
} from '.'

const Button = forwardRef(
  (
    {
      variant = 'primary',
      type = 'button',
      size = 'medium',
      className,
      children,
      disabled,
      loading,
      ...props
    }: IButton,
    ref: Ref<HTMLButtonElement>
  ): JSX.Element => {
    const isDisabled = disabled || loading

    return (
      <button
        type={type}
        ref={ref}
        className={twMerge(
          'font-semibold',
          disabled && !loading && disabledClassName,
          loading && loadingClassName,
          buttonSizes[size],
          buttonVariants[variant],
          className
        )}
        disabled={isDisabled}
        {...props}
      >
        {loading ? <Loading component="buttonLoading" size={size} /> : children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
