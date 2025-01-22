export type TEbookCardVariants = 'orange' | 'green'

export interface IEbookCard {
  title: string
  buttonTitle: string
  description: string
  link: string
  variant: TEbookCardVariants
}
