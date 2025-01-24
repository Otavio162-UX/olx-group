'use client'

import { IHomeBlogArticleCard } from '@/components/blog/organisms/HomeBlog/HomeBlogArticleCard/HomeBlogArticleCard.interface'
import { useState } from 'react'

const articleA: IHomeBlogArticleCard = {
  imageSrc:
    'https://www.pixelstalk.net/wp-content/uploads/2016/07/Free-Amazing-Background-Images-Nature.jpg',
  buttonTitle: 'Carreira',
  newsTitle:
    'ITBI na integralização de bens imóveis e sua importância para o planejamento patrimonial',
  newsDescription: 'Descrição do blog vai aqui',
  timeOlx: 'Time OLX',
  date: '11 Jan 2022',
  readTime: 'Leitura de 5 min',
  variant: 'immobile',
}

const articleB: IHomeBlogArticleCard = {
  imageSrc:
    'https://2.bp.blogspot.com/-ZOQEZzLsB50/V89wZ4z27uI/AAAAAAAAAaU/UqejOE-PfQoVAGWO-gq3l__fPPQM9l7zgCLcB/s1920/Nature_Wave_Ocean_Sunset_Sunlight_Water_hd.jpg',
  buttonTitle: 'Tendências',
  newsTitle: 'Trump é o novo presidente dos estados unidos.',
  newsDescription: 'A descrição irá aqui',
  timeOlx: 'Time OLX',
  date: '11 Jan 2022',
  readTime: 'Leitura de 15 min',
  variant: 'autos',
}

const allArticles: Record<number, IHomeBlogArticleCard[]> = {
  0: [...Array(6)].map(() => articleA),
  1: [...Array(6)].map(() => articleB),
}

interface IReturnUseGetHomeBlogArticles {
  page: number
  totalPages: number
  loading: boolean
  changePage: (newPage: number) => void
  articles: IHomeBlogArticleCard[]
}

export const useGetHomeBlogArticles = (): IReturnUseGetHomeBlogArticles => {
  const [page, setPage] = useState(0)
  const [totalPages] = useState(2)
  const [loading, setLoading] = useState(false)

  const [articles, setArticles] = useState(allArticles[0])

  const changePage = (newPage: number) => {
    setLoading(true)

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
