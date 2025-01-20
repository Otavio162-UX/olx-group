import { THeaderMenu } from '@/types/global'

const categories: THeaderMenu = {
  buttonTitle: 'Categorias',
  children: <div>oi</div>,
}

export const headerBlogMenu: THeaderMenu[] = [
  categories,
  {
    buttonTitle: 'Mais lidas',
    link: '/naoSabeAinda', // substituir depois
  },
]
