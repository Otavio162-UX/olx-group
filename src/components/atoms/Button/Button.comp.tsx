import { forwardRef, Ref } from 'react'
import { buttonSizes, buttonVariants, IButton } from '.'
import { twMerge } from 'tailwind-merge'
import { Loading } from '../Loading'

export const disabledClassName =
  'disabled:bg-transparent disabled:cursor-not-allowed disabled:text-neutral-70 disabled:border-0 disabled:outline-none'

export const loadingClassName =
  'flex items-center justify-center cursor-not-allowed'

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

    const ButtonChildren = () => {
      if (loading) return <Loading component="buttonLoading" size={size} />
      return children
    }

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
        <ButtonChildren />
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }
