import { InternalRoutes } from '@/routes/routes'
import { blogCategoriesNavigation } from '@/variables'

export const footerBlogNavigation = [
  {
    title: 'Categorias',
    submenu: blogCategoriesNavigation,
  },
  {
    title: 'Mais lidas',
    link: InternalRoutes.BLOG_MORE_READ,
    submenu: [],
  },
]
