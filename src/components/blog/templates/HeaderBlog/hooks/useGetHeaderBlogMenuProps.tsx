import { HeaderBlogDropDownCategories } from '@/components/blog/organisms/HeaderBlog/HeaderBlogDropDownCategories'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { InternalRoutes } from '@/routes/routes'
import { THeaderMenu } from '@/types/global'

const categoriesBlogMenu: THeaderMenu = {
  buttonTitle: 'Categorias',
  children: <HeaderBlogDropDownCategories />,
  iconProps: {
    show: true,
  },
}

export const useGetHeaderBlogMenuProps = (): THeaderMenu[] => {
  const blogType = useGetBlogType()

  return [
    categoriesBlogMenu,
    {
      buttonTitle: 'Mais lidas',
      link: InternalRoutes.BLOG_MORE_READ(blogType),
    },
  ]
}
