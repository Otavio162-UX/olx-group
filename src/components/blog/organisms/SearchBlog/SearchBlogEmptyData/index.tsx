'use client'

import { SearchBlogEmptyTitleAndIcon } from '@/components/blog/molecules/SearchBlog/SearchBlogEmptyTitleAndIcon'
import { BlogArticleCard } from '@/components/blog/organisms/BlogArticleCard'
import { useGetBlogType } from '@/hooks/blog/useGetBlogType'
import { twMerge } from 'tailwind-merge'
import { useSearchBlogEmptyDataProps } from './hooks/useSearchBlogEmptyDataProps'

const SearchBlogEmptyData = (): JSX.Element => {
  const blogType = useGetBlogType()
  const otherArticles = useSearchBlogEmptyDataProps()

  return (
    <section
      className={twMerge(
        blogType,
        'flex flex-col gap-8 pb-9',
        'lg:pb-[9.75rem]'
      )}
    >
      <SearchBlogEmptyTitleAndIcon />

      <div
        className={twMerge(
          'grid grid-cols-1 gap-4',
          'md:grid-cols-2',
          'lg:grid-cols-3 lg:gap-8'
        )}
      >
        {otherArticles.map((article, indexArticle) => (
          <BlogArticleCard
            key={`other-article-card-${indexArticle}`}
            {...article}
          />
        ))}
      </div>
    </section>
  )
}

export { SearchBlogEmptyData }
