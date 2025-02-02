'use client'

import { HomeBlogTitleGroup } from '@/components/blog/molecules/HomeBlog/HomeBlogTitleGroup'
import { BlogArticleCard } from '@/components/blog/organisms/BlogArticleCard'
import { LoadingContainer } from '@/components/generic/molecules/LoadingContainer'
import { Pagination } from '@/components/generic/organisms/Pagination'
import { twMerge } from 'tailwind-merge'
import { useGetHomeBlogArticles } from './hooks/useGetHomeBlogArticles'

const HomeBlogArticles = (): JSX.Element => {
  const { page, totalPages, loading, changePage, articles } =
    useGetHomeBlogArticles()

  return (
    <section className={twMerge('pb-10 flex flex-col gap-10', 'lg:pt-10')}>
      <HomeBlogTitleGroup textHighlight="Destaque" title="Artigos" />

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

export { HomeBlogArticles }
