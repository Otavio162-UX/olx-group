import { TObjectVariant } from '@/types/global'
import { TNewsCardVariants } from '../HomeBlogArticleCard.interface'

const ballClassNameVariants: TObjectVariant<TNewsCardVariants> = {
  orange: 'bg-orange-90',
  green: 'bg-green-90',
}

const buttonClassNameVariants: TObjectVariant<TNewsCardVariants> = {
  orange: 'bg-orange-70 hover:bg-orange-90 active:bg-orange-90',
  green: 'bg-green-70 hover:bg-green-90 active:bg-green-90',
}

export const homeBlogArticleCardProps = {
  buttonClassNameVariants,
  ballClassNameVariants,
}
