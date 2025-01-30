'use client'

import { Text } from '@/components/generic/atoms/Text'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { twMerge } from 'tailwind-merge'
import { IRichMaterialsBlogEbookHighlight } from './RichMaterialsBlogEbookHighlight.interface'

const RichMaterialsBlogEbookHighlight = ({
  children,
}: IRichMaterialsBlogEbookHighlight): JSX.Element => {
  const blogType = useGetBlogType()

  return (
    <div
      className={twMerge(blogType, 'flex items-center px-2 gap-3', 'lg:py-3')}
    >
      <div className="min-w-4 max-w-4 min-h-4 max-h-4 bg-theme-blog-color-90 rotate-45" />
      <Text
        tag="p"
        className={twMerge(
          'text-base text-neutral-100 font-medium',
          'lg:text-lg'
        )}
      >
        {children}
      </Text>
    </div>
  )
}

export { RichMaterialsBlogEbookHighlight }
