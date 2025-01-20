import { TObjectVariant } from '@/types/global'
import { TTabinationButtonVariants } from '../TabinationButton.interface'

export const classNameVariants: TObjectVariant<TTabinationButtonVariants> = {
  active: 'text-primary-100 border-primary-100',
  inactive:
    'border-neutral-90 hover:text-secondary-110 hover:border-secondary-110',
}

export const tabinationButtonProps = {
  classNameVariants,
}
