import { TObjectVariant } from '@/types/global'
import { TTabinationButtonVariants } from '../TabinationButton.interface'

export const classNameVariants: TObjectVariant<TTabinationButtonVariants> = {
  active: 'text-primary-100 border-primary-100',
  activeBlog:
    'text-theme-blog-secondary-color-110 border-theme-blog-secondary-color-110',
  inactive:
    'border-neutral-90 hover:text-secondary-110 hover:border-secondary-110',
}

export const tabinationButtonProps = {
  classNameVariants,
}
