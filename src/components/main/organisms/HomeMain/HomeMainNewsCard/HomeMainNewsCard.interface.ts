import { TBlogVariants } from '@/types/global'

export interface IHomeMainNewsCard {
  imageSrc: string
  blogType: TBlogVariants
  buttonTitle: string
  newsTitle: string
  newsDescription: string
  timeOlx: string
  date: string
  readTime: string
  newsId: string | number
}
