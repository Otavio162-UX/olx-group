import { Loading } from '@/components/atoms/Loading'
import { twMerge } from 'tailwind-merge'
import { IButton } from './Button.interface'
import { disabledClassName, loadingClassName } from './variables/classNames'
import { buttonSizes, buttonVariants } from './variables/variants'

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
  const isDisabled = disabled || loading

  return (
    <button
      type={type}
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

export { Button }
