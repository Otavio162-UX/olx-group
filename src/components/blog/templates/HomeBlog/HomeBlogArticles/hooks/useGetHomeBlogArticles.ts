'use client'

import { IBlogArticleCard } from '@/components/blog/organisms/BlogArticleCard/BlogArticleCard.interface'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { useState } from 'react'

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

const articleB: IBlogArticleCard = {
  imageSrc:
    'https://2.bp.blogspot.com/-ZOQEZzLsB50/V89wZ4z27uI/AAAAAAAAAaU/UqejOE-PfQoVAGWO-gq3l__fPPQM9l7zgCLcB/s1920/Nature_Wave_Ocean_Sunset_Sunlight_Water_hd.jpg',
  buttonTitle: 'Tendências',
  newsTitle: 'Trump é o novo presidente dos estados unidos.',
  newsDescription: 'A descrição irá aqui',
  timeOlx: 'Time OLX',
  date: '11 Jan 2022',
  readTime: 'Leitura de 15 min',
  newsId: 'titulo-6',
}

const allArticles: Record<number, IBlogArticleCard[]> = {
  0: [...Array(6)].map(() => articleA),
  1: [...Array(6)].map(() => articleB),
}

interface IReturnUseGetHomeBlogArticles {
  page: number
  totalPages: number
  loading: boolean
  changePage: (newPage: number) => void
  articles: IBlogArticleCard[]
}

export const useGetHomeBlogArticles = (): IReturnUseGetHomeBlogArticles => {
  const blogType = useGetBlogType()

  const [page, setPage] = useState(0)
  const [totalPages] = useState(2)
  const [loading, setLoading] = useState(false)

  const [articles, setArticles] = useState(allArticles[0])

  const changePage = (newPage: number) => {
    setLoading(true)

    console.log(blogType)

    setTimeout(() => {
      setPage(newPage)
      setArticles(allArticles[newPage])
      setLoading(false)
    }, 1000)
  }

  return {
    page,
    totalPages,
    loading,
    changePage,
    articles,
  }
}
