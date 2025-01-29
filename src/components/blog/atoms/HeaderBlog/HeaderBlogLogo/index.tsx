'use client'

import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { headerBlogLogoProps } from './variables/headerBlogLogo'

const HeaderBlogLogo = (): JSX.Element => {
  const blogType = useGetBlogType()

  const { logoProps } = headerBlogLogoProps

  return <ImageComponent {...logoProps[blogType]} />
}

export { HeaderBlogLogo }
