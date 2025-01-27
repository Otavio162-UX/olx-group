'use client'

import { BlogArticleCard } from '@/components/blog/organisms/BlogArticleCard'
import { LoadingContainer } from '@/components/generic/molecules/LoadingContainer'
import { Pagination } from '@/components/generic/organisms/Pagination'
import { twMerge } from 'tailwind-merge'
import { useSearchBlogTab } from './hooks/useSearchBlogTab'
import { ISearchBlogTab } from './SearchBlogTab.interface'

const SearchBlogTab = ({
  tabId,
  setSearchDataIsEmpty,
}: ISearchBlogTab): JSX.Element => {
  const { articles, changePage, loading, page, totalPages } = useSearchBlogTab({
    tabId,
    setSearchDataIsEmpty,
  })

  return (
    <section className="flex flex-col gap-8 mt-8">
      {loading ? (
        <LoadingContainer
          wrapperElementClassName={twMerge('h-[40.8125rem]', 'lg:h-[71rem]')}
          loadingSize="large"
        />
      ) : (
        <div
          className={twMerge(
            'grid grid-cols-1 gap-4',
            'md:grid-cols-2',
            'lg:grid-cols-3 lg:gap-12'
          )}
        >
          {articles.map((article, indexArticle) => (
            <BlogArticleCard
              key={`article-card-${indexArticle}`}
              {...article}
            />
          ))}
        </div>
      )}

      <Pagination
        loading={loading}
        page={page}
        totalPages={totalPages}
        changePage={changePage}
      />
    </section>
  )
}

export { SearchBlogTab }
