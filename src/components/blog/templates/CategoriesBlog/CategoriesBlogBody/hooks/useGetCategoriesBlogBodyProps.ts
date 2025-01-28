'use client'

import { IBlogArticleCard } from '@/components/blog/organisms/BlogArticleCard/BlogArticleCard.interface'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { TBlogVariants } from '@/types/global'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { convertLastPath } from '../functions/convertLastPath.'

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

interface IReturnUseGetCategoriesBlogBodyProps {
  paths: string[]
  page: number
  totalPages: number
  loading: boolean
  changePage: (newPage: number) => void
  articles: IBlogArticleCard[]
  blogType: TBlogVariants
}

export const useGetCategoriesBlogBodyProps =
  (): IReturnUseGetCategoriesBlogBodyProps => {
    const pathname = usePathname()

    const lastPathname = convertLastPath({ pathname })

    const blogType = useGetBlogType()

    const [page, setPage] = useState(0)
    const [totalPages] = useState(2)
    const [loading, setLoading] = useState(true)

    const [articles, setArticles] = useState<IBlogArticleCard[]>([])

    const changePage = (newPage: number) => {
      setLoading(true)

      console.log(blogType)

      setTimeout(() => {
        setPage(newPage)
        setArticles(allArticles[newPage])
        setLoading(false)
      }, 1000)
    }

    useEffect(() => {
      changePage(0)
    }, [])

    return {
      paths: ['Blog', lastPathname],
      articles,
      changePage,
      loading,
      page,
      totalPages,
      blogType,
    }
  }
