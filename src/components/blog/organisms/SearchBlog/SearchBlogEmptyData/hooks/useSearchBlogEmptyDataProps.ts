'use client'

import { IBlogArticleCard } from '@/components/blog/organisms/BlogArticleCard/BlogArticleCard.interface'

const articleA: IBlogArticleCard = {
  imageSrc:
    'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg',
  buttonTitle: 'Carreira',
  newsTitle:
    'ITBI na integralização de bens imóveis e sua importância para o planejamento patrimonial',
  newsDescription: 'Descrição do blog vai aqui',
  timeOlx: 'Time OLX',
  date: '11 Jan 2022',
  readTime: 'Leitura de 5 min',
  newsId: 'titulo-6',
}

const otherArticles: Record<number, IBlogArticleCard[]> = {
  0: [...Array(3)].map(() => articleA),
}

export const useSearchBlogEmptyDataProps = (): IBlogArticleCard[] => {
  return otherArticles[0]
}
