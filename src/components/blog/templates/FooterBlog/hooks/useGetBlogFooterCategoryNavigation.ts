'use client'

import {
  IReturnUseGetBlogCategoryNavigation,
  useGetBlogCategoryNavigation,
} from '@/hooks/blog/useGetBlogCategoryNavigation'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { InternalRoutes } from '@/routes/routes'

interface IReturnUseGetBlogFooterCategoryNavigation {
  title: string
  link?: string
  submenu: IReturnUseGetBlogCategoryNavigation[]
}

export const useGetBlogFooterCategoryNavigation =
  (): IReturnUseGetBlogFooterCategoryNavigation[] => {
    const blogCategoriesNavigation = useGetBlogCategoryNavigation()

    const blogType = useGetBlogType()

    const footerBlogNavigation: IReturnUseGetBlogFooterCategoryNavigation[] = [
      {
        title: 'Categorias',
        submenu: blogCategoriesNavigation,
      },
      {
        title: 'Mais lidas',
        link: InternalRoutes.BLOG_MORE_READ(blogType),
        submenu: [],
      },
    ]

    return footerBlogNavigation
  }
