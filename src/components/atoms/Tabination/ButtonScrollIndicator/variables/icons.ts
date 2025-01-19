import { TObjectVariant } from '@/types/global'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { TButtonScrollIndicator } from '../ButtonScrollIndicator.interface'

export const buttonScrollIconVariants: TObjectVariant<TButtonScrollIndicator> =
  {
    left: mdiChevronLeft,
    right: mdiChevronRight,
  }
