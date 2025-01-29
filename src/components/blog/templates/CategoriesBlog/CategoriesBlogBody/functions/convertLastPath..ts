import { blogCategoryTranslations } from '../variables/categoriesBlogBodyProps'

interface IConvertLastPath {
  pathname: string
}

export const convertLastPath = ({ pathname }: IConvertLastPath): string => {
  const lastPath = pathname
    .split('/')
    .pop() as keyof typeof blogCategoryTranslations

  return blogCategoryTranslations[lastPath]
}
