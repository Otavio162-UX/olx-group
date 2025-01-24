export type TNewsCardVariants = 'orange' | 'green'

export interface IHomeMainNewsCard {
  imageSrc: string
  imageClassName: string
  variant: TNewsCardVariants
  buttonTitle: string
  newsTitle: string
  newsDescription: string
  timeOlx: string
  date: string
  readTime: string
}
