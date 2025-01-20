import { TObjectVariant } from '@/types/global'
import { mdiChevronLeft, mdiChevronRight } from '@mdi/js'
import { TButtonScrollIndicator } from '../ButtonScrollIndicator.interface'

export const iconsVariants: TObjectVariant<TButtonScrollIndicator> = {
  left: mdiChevronLeft,
  right: mdiChevronRight,
}

export const classNameVariants: TObjectVariant<TButtonScrollIndicator> = {
  left: 'left-0',
  right: 'right-0',
}

export const tabinationButtonIndicatorProps = {
  iconsVariants,
  classNameVariants,
}
