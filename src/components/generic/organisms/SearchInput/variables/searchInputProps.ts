import { TObjectVariant } from '@/types/global'
import { TSearchInputVariants } from '../SearchInput.interface'

const classNameVariants: TObjectVariant<TSearchInputVariants> = {
  success: 'border-success-border-color',
  error: 'border-error-border-color bg-error-background-color',
}

export const searchInputProps = {
  classNameVariants,
}
