'use client'

import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { TBlogVariants } from '@/types/global'
import { usePathname } from 'next/navigation'

interface IReturnUsePostBlogInitialInfoProps {
  paths: string[]
  blogType: TBlogVariants
}

export const usePostBlogInitialInfoProps =
  (): IReturnUsePostBlogInitialInfoProps => {
    const blogType = useGetBlogType()

    const pathname = usePathname()

    const lastPath = pathname.split('/').pop()?.replaceAll('-', ' ')

    return {
      paths: ['Blog', lastPath || 'Post'],
      blogType,
    }
  }
