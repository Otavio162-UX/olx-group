'use client'

import { IBlogArticleCard } from '@/components/blog/organisms/BlogArticleCard/BlogArticleCard.interface'
import { searchBlogResultsCategoriesTab } from '@/components/blog/templates/SearchBlog/SearchBlogResultsContainer/arrays/searchBlogResultsCategoriesTab'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

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

interface IUseSearchBlogTab {
  tabId: string
  setSearchDataIsEmpty: Dispatch<SetStateAction<boolean>>
}

interface IReturnUseSearchBlogTab {
  page: number
  totalPages: number
  loading: boolean
  changePage: (newPage: number) => void
  articles: IBlogArticleCard[]
}

export const useSearchBlogTab = ({
  tabId,
  setSearchDataIsEmpty,
}: IUseSearchBlogTab): IReturnUseSearchBlogTab => {
  const blogType = useGetBlogType()

  const searchParams = useSearchParams().get('search')

  const [page, setPage] = useState(0)
  const [totalPages] = useState(2)
  const [loading, setLoading] = useState(true)

  const [articles, setArticles] = useState(allArticles[0])

  const changePage = (newPage: number) => {
    setLoading(true)

    console.log(blogType)
    console.log(tabId)
    console.log(searchParams)

    const dataIsEmpty =
      tabId === searchBlogResultsCategoriesTab[0].id &&
      allArticles[newPage].length === 0

    if (dataIsEmpty) {
      setTimeout(() => {
        setSearchDataIsEmpty(true)
        setLoading(false)
      }, 1000)
    } else {
      setTimeout(() => {
        setPage(newPage)
        setArticles(allArticles[newPage])
        setLoading(false)
      }, 1000)
    }
  }

  useEffect(() => {
    changePage(0)
  }, [])

  return {
    page,
    totalPages,
    loading,
    changePage,
    articles,
  }
}
