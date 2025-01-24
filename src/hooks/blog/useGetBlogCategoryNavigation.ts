import { BlogCategoryType } from '@/enum/categoriesType'
import { InternalRoutes } from '@/routes/routes'
import { TBlogVariants } from '@/types/global'
import { useGetBlogType } from './useGetBlogType'

export interface IReturnUseGetBlogCategoryNavigation {
  title: string
  link: string
}

const generateCategories = (
  blogType: TBlogVariants
): IReturnUseGetBlogCategoryNavigation[] => {
  return [
    {
      title: 'Gestão e Relacionamento',
      link: InternalRoutes.BLOG_CATEGORY_TYPE(
        blogType,
        BlogCategoryType.MANAGEMENT_AND_RELATIONSHIP
      ),
    },
    {
      title: 'Carreira',
      link: InternalRoutes.BLOG_CATEGORY_TYPE(
        blogType,
        BlogCategoryType.CAREERS
      ),
    },
    {
      title: 'Na prática',
      link: InternalRoutes.BLOG_CATEGORY_TYPE(
        blogType,
        BlogCategoryType.IN_PRACTICE
      ),
    },
    {
      title: 'Marketing e Vendas',
      link: InternalRoutes.BLOG_CATEGORY_TYPE(
        blogType,
        BlogCategoryType.MARKETING_AND_SALES
      ),
    },
    {
      title: 'Tendências',
      link: InternalRoutes.BLOG_CATEGORY_TYPE(
        blogType,
        BlogCategoryType.TRENDS
      ),
    },
    {
      title: 'Eventos',
      link: InternalRoutes.BLOG_CATEGORY_TYPE(
        blogType,
        BlogCategoryType.EVENTS
      ),
    },
    {
      title: 'Mercado',
      link: InternalRoutes.BLOG_CATEGORY_TYPE(
        blogType,
        BlogCategoryType.MARKET
      ),
    },
    {
      title: 'Tecnologia e Inovação',
      link: InternalRoutes.BLOG_CATEGORY_TYPE(
        blogType,
        BlogCategoryType.TECHNOLOGY_AND_INNOVATION
      ),
    },
  ]
}

export const useGetBlogCategoryNavigation =
  (): IReturnUseGetBlogCategoryNavigation[] => {
    const blogType = useGetBlogType()

    return generateCategories(blogType)
  }
