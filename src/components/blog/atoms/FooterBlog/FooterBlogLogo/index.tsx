'use client'

import { ImageComponent } from '@/components/generic/atoms/ImageComponent'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { twMerge } from 'tailwind-merge'
import { footerBlogLogoProps } from './variables/footerBlogLogo'

const FooterBlogLogo = (): JSX.Element => {
  const blogType = useGetBlogType()

  const { logoProps } = footerBlogLogoProps

  return (
    <>
      <ImageComponent {...logoProps[blogType]} />

      {blogType === 'immobile' && (
        <ImageComponent
          src="/blog/logos/immobileLogoGroupBreak.svg"
          alt="olx-group-logo"
          width={199}
          height={112}
          className={twMerge(
            'hidden',
            'lg:block lg:w-[12.4375rem] lg:h-[7rem] lg:object-cover'
          )}
        />
      )}
    </>
  )
}

export { FooterBlogLogo }
