import { TObjectVariant } from '@/types/global'
import { TEbookCardVariants } from '../EbookCard.interface'

const buttonClassNameVariants: TObjectVariant<TEbookCardVariants> = {
  orange: 'bg-orange-70 hover:bg-orange-90',
  green: 'bg-green-70 hover:bg-green-90',
}

export const ebookCardProps = {
  buttonClassNameVariants,
}
