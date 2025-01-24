import { TObjectVariant } from '@/types/global'
import { TPaginationButtonVariants } from '../PaginationButton.interface'

const classNameVariants: TObjectVariant<TPaginationButtonVariants> = {
  inactive:
    'bg-primary-70 text-primary-100 hover:bg-primary-100 hover:text-neutral-70',
  active: 'bg-primary-100 text-neutral-70',
}

export const paginationButtonProps = {
  classNameVariants,
}
