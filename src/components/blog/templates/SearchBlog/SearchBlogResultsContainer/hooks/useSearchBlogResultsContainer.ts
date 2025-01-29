'use client'

import { IReturnUseSearchBlog, useSearchBlog } from '@/hooks/blog/useSearchBlog'
import { useSearchParams } from 'next/navigation'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'

interface IReturnUseSearchBlogResultsContainer extends IReturnUseSearchBlog {
  searchParams: string | null
  searchDataIsEmpty: boolean
  setSearchDataIsEmpty: Dispatch<SetStateAction<boolean>>
}

export const useSearchBlogResultsContainer =
  (): IReturnUseSearchBlogResultsContainer => {
    const searchParams = useSearchParams().get('search')

    const [searchDataIsEmpty, setSearchDataIsEmpty] = useState(false)

    const defaultSearchProps = useSearchBlog()

    useEffect(() => {
      setSearchDataIsEmpty(false)
    }, [searchParams])

    return {
      searchParams,
      searchDataIsEmpty,
      setSearchDataIsEmpty,
      ...defaultSearchProps,
    }
  }
