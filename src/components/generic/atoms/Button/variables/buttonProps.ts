import { TGlobalSizeVariant, TObjectVariant } from '@/types/global'
import { TButtonVariants } from '../Button.interface'

const classNameVariants: TObjectVariant<TButtonVariants> = {
  primary:
    'bg-primary-100 text-neutral-70 hover:bg-primary-110 active:bg-primary-120 focus:outline-1 focus:border-2 focus:border-white',
  secondary: 'bg-primary-80 text-primary-130',
  tertiary: 'border border-primary-100 text-primary-100',
  link: 'appearance-none text-primary-100',
  neutral: 'border border-neutral-80 text-neutral-130',
  danger: 'bg-danger-100 text-neutral-70',
  clean: 'bg-transparent text-neutral-130',
}

const sizesVariants: TObjectVariant<TGlobalSizeVariant> = {
  small: 'text-sm px-4 py-1.5 leading-snug rounded-lg',
  medium: 'text-base px-6 py-3 leading-normal rounded-xl',
  large: 'text-base px-6 py-4 leading-normal rounded-xl',
}

export const disabledClassName =
  'disabled:bg-transparent disabled:cursor-not-allowed disabled:text-neutral-80 disabled:border-0 disabled:outline-none'

export const loadingClassName =
  'flex items-center justify-center cursor-not-allowed'

export const buttonProps = {
  sizesVariants,
  classNameVariants,
  disabledClassName,
  loadingClassName,
}
