import { TObjectVariant } from '@/types/global'
import { TNewsCardVariants } from '../NewsCard.interface'

const ballClassNameVariants: TObjectVariant<TNewsCardVariants> = {
  orange: 'bg-orange-90',
  green: 'bg-green-90',
}

const buttonClassNameVariants: TObjectVariant<TNewsCardVariants> = {
  orange: 'bg-orange-70 hover:bg-orange-90',
  green: 'bg-green-70 hover:bg-green-90',
}

export const newsCardProps = {
  buttonClassNameVariants,
  ballClassNameVariants,
}
