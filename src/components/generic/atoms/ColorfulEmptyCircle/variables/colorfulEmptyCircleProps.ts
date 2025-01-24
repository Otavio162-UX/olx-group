import { TCategoryVariants } from '@/components/generic/atoms/CategoryCard/CategoryCard.interface'
import { TObjectVariant } from '@/types/global'

const classNameVariants: TObjectVariant<TCategoryVariants> = {
  orange: 'bg-orange-90',
  'orange-light': 'bg-orange-60',
  green: 'bg-green-90',
}

export const colorfulEmptyCircleProps = {
  classNameVariants,
}
