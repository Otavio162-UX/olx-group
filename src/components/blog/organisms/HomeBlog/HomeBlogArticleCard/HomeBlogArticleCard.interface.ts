import { TBlogVariants } from '@/types/global'

export interface IHomeBlogArticleCard {
  imageSrc: string
  variant: TBlogVariants
  buttonTitle: string
  newsTitle: string
  newsDescription: string
  timeOlx: string
  date: string
  readTime: string
}
