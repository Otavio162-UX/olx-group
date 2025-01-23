import { InternalRoutes } from '@/routes/routes'

export const blogCategoriesNavigation = [
  {
    title: 'Gestão e Relacionamento',
    link: InternalRoutes.BLOG_MANAGEMENT_AND_RELATIONSHIP,
  },
  {
    title: 'Carreira',
    link: InternalRoutes.BLOG_CAREERS,
  },
  {
    title: 'Na prática',
    link: InternalRoutes.BLOG_IN_PRACTICE,
  },
  {
    title: 'Marketing e Vendas',
    link: InternalRoutes.BLOG_MARKETING_AND_SALES,
  },
  {
    title: 'Tendências',
    link: InternalRoutes.BLOG_TRENDS,
  },
  {
    title: 'Eventos',
    link: InternalRoutes.BLOG_EVENTS,
  },
  {
    title: 'Mercado',
    link: InternalRoutes.BLOG_MARKET,
  },
  {
    title: 'Tecnologia e Inovação',
    link: InternalRoutes.BLOG_TECHNOLOGY_AND_INNOVATION,
  },
]

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
