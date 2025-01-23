import { HeaderBlogDropDownCategories } from '@/components/blog/organisms/HeaderBlog/HeaderBlogDropDownCategories'
import { InternalRoutes } from '@/routes/routes'
import { THeaderMenu } from '@/types/global'

const categoriesBlogMenu: THeaderMenu = {
  buttonTitle: 'Categorias',
  children: <HeaderBlogDropDownCategories />,
  iconProps: {
    show: true,
  },
}

export const headerBlogMenu: THeaderMenu[] = [
  categoriesBlogMenu,
  {
    buttonTitle: 'Mais lidas',
    link: InternalRoutes.BLOG_MORE_READ,
  },
]
