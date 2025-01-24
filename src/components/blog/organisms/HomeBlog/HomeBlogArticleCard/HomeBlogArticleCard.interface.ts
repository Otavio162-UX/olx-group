export type TNewsCardVariants = 'orange' | 'green'

export interface IHomeBlogArticleCard {
  imageSrc: string
  variant: TNewsCardVariants
  buttonTitle: string
  newsTitle: string
  newsDescription: string
  timeOlx: string
  date: string
  readTime: string
}
