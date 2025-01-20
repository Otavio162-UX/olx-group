import { Loading } from '@/components/atoms/Loading'
import { twMerge } from 'tailwind-merge'
import { IButton } from './Button.interface'
import { buttonProps } from './variables/buttonProps'

const Button = ({
  variant = 'primary',
  type = 'button',
  size = 'medium',
  className,
  children,
  disabled,
  loading,
  ...props
}: IButton): JSX.Element => {
  const {
    classNameVariants,
    disabledClassName,
    loadingClassName,
    sizesVariants,
  } = buttonProps

  const isDisabled = disabled || loading

  return (
    <button
      type={type}
      className={twMerge(
        'font-semibold',
        disabled && !loading && disabledClassName,
        loading && loadingClassName,
        sizesVariants[size],
        classNameVariants[variant],
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {loading ? <Loading size={size} /> : children}
    </button>
  )
}

export { Button }
