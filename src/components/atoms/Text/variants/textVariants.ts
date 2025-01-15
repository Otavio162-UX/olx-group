import { TObjectVariant } from '@/types/global'
import { TTextVariants } from '..'

export const textVariants: TObjectVariant<TTextVariants> = {
  'very-small': 'text-[.625rem]',
  small: 'text-xs',
  medium: 'text-sm',
  large: 'text-base',
  'very-large': 'text-lg',
  big: 'text-xl',
  'very-big': 'text-2xl',
}
