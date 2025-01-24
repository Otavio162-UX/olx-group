import { TCategoryVariants } from '@/components/generic/atoms/CategoryCard/CategoryCard.interface'

export interface IHomeBlogArticleCard {
  imageSrc: string
  variant: TCategoryVariants
  buttonTitle: string
  newsTitle: string
  newsDescription: string
  timeOlx: string
  date: string
  readTime: string
}
