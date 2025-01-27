'use client'

import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { InternalRoutes } from '@/routes/routes'
import { TBlogVariants } from '@/types/global'
import { useRouter, useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

export interface IReturnUseSearchBlog {
  search: string
  setSearch: Dispatch<SetStateAction<string>>
  handleSearch: VoidFunction
  blogType: TBlogVariants
}

export const useSearchBlog = (): IReturnUseSearchBlog => {
  const blogType = useGetBlogType()

  const router = useRouter()
  const searchValue = useSearchParams().get('search')

  const [search, setSearch] = useState(searchValue || '')

  const handleSearch = () => {
    try {
      let searchParams = undefined
      if (search) {
        searchParams = new URLSearchParams()
        searchParams.append('search', search)
        searchParams = searchParams.toString()
      }

      router.push(InternalRoutes.BLOG_SEARCH(blogType, searchParams))
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    setSearch(searchValue || '')
  }, [searchValue])

  return {
    search,
    setSearch,
    handleSearch,
    blogType,
  }
}
