import { TGlobalSizeVariant, TObjectVariant } from '@/types/global'
import { TButtonVariants } from '..'

export const buttonVariants: TObjectVariant<TButtonVariants> = {
  primary:
    'bg-primary-100 text-white hover:bg-primary-110 active:bg-primary-120 focus:outline-1 focus:border-2 focus:border-white',
  secondary: 'bg-primary-80 text-primary-130',
  tertiary: 'border border-primary-100 text-primary-100',
  link: 'appearance-none text-primary-100',
  neutral: 'border border-neutral-80 text-neutral-100',
  danger: 'bg-danger-100 text-white',
}

export const buttonSizes: TObjectVariant<TGlobalSizeVariant> = {
  small: 'text-sm px-4 py-1.5 leading-snug rounded-lg',
  medium: 'text-base px-6 py-3 leading-normal rounded-xl',
  large: 'text-base px-6 py-4 leading-normal rounded-xl',
}
