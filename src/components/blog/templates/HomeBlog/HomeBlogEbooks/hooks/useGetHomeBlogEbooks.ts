'use client'

import { IHomeBlogEbookCard } from '@/components/blog/organisms/HomeBlog/HomeBlogEbookCard/HomeBlogEbookCard.interface'
import { useState } from 'react'

const ebookA: IHomeBlogEbookCard = {
  title:
    'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
  buttonTitle: 'Imóveis',
  description: 'Descrição resumida do e-book',
  link: 'https://www.google.com',
  variant: 'orange',
}

const ebookB: IHomeBlogEbookCard = {
  title:
    'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
  buttonTitle: 'Gestão e relacionamento',
  description:
    'Descrição resumida do e-book irá aqui para mostrar algumas linhas',
  link: 'https://www.google.com',
  variant: 'green',
}

const allEbooks: Record<number, IHomeBlogEbookCard[]> = {
  0: [...Array(4)].map(() => ebookA),
  1: [...Array(4)].map(() => ebookB),
}

interface IReturnUseGetHomeBlogEbooks {
  page: number
  totalPages: number
  loading: boolean
  changePage: (newPage: number) => void
  ebooks: IHomeBlogEbookCard[]
}

export const useGetHomeBlogEbooks = (): IReturnUseGetHomeBlogEbooks => {
  const [page, setPage] = useState(0)
  const [totalPages] = useState(2)
  const [loading, setLoading] = useState(false)

  const [ebooks, setEbooks] = useState(allEbooks[0])

  const changePage = (newPage: number) => {
    setLoading(true)

    setTimeout(() => {
      setPage(newPage)
      setEbooks(allEbooks[newPage])
      setLoading(false)
    }, 1000)
  }

  return {
    page,
    totalPages,
    loading,
    changePage,
    ebooks,
  }
}
