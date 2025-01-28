import { TBlogVariants } from '@/types/global'
import { usePathname } from 'next/navigation'

export const useGetBlogType = (): TBlogVariants => {
  const pathname = usePathname()

  const blogTypeRegex = /\/blog\/(autos|immobile)/
  const match =
    (pathname?.match(blogTypeRegex)?.[1] as TBlogVariants) || 'immobile'

  return match
}
