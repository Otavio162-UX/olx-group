import { TCategoryVariants } from '@/components/generic/atoms/CategoryCard/CategoryCard.interface'

export interface IHomeMainNewsCard {
  imageSrc: string
  imageClassName: string
  variant: TCategoryVariants
  buttonTitle: string
  newsTitle: string
  newsDescription: string
  timeOlx: string
  date: string
  readTime: string
}
