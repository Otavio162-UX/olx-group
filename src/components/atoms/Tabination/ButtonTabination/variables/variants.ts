import { TObjectVariant } from '@/types/global'
import { TButtonTabinationVariants } from '../ButtonTabination.interface'

export const buttonTabinationVariants: TObjectVariant<TButtonTabinationVariants> =
  {
    active: 'text-primary-100 border-primary-100',
    inactive:
      'border-neutral-90 hover:text-secondary-110 hover:border-secondary-110',
  }
