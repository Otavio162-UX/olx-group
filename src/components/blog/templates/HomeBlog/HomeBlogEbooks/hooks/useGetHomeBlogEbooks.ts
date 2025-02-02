'use client'

import { IBlogEbookCard } from '@/components/blog/organisms/BlogEbookCard/BlogEbookCard.interface'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { useState } from 'react'

const ebookA: IBlogEbookCard = {
  title:
    'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
  buttonTitle: 'Imóveis',
  description: 'Descrição resumida do e-book',
  ebookId: 'ebook-1',
}

const ebookB: IBlogEbookCard = {
  title:
    'Data OLX Autos traz perspectivas do setor automotivo no encerramento do ano',
  buttonTitle: 'Gestão e relacionamento',
  description:
    'Descrição resumida do e-book irá aqui para mostrar algumas linhas',
  ebookId: 'ebook-2',
}

const allEbooks: Record<number, IBlogEbookCard[]> = {
  0: [...Array(4)].map(() => ebookA),
  1: [...Array(4)].map(() => ebookB),
}

interface IReturnUseGetHomeBlogEbooks {
  page: number
  totalPages: number
  loading: boolean
  changePage: (newPage: number) => void
  ebooks: IBlogEbookCard[]
}

export const useGetHomeBlogEbooks = (): IReturnUseGetHomeBlogEbooks => {
  const blogType = useGetBlogType()

  const [page, setPage] = useState(0)
  const [totalPages] = useState(2)
  const [loading, setLoading] = useState(false)

  const [ebooks, setEbooks] = useState(allEbooks[0])

  const changePage = (newPage: number) => {
    setLoading(true)

    console.log(blogType)

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
