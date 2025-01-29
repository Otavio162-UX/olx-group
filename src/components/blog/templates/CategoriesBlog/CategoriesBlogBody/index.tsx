'use client'

import { BlogArticleCard } from '@/components/blog/organisms/BlogArticleCard'
import { Title } from '@/components/generic/atoms/Title'
import { BreadCrumbs } from '@/components/generic/molecules/BreadCrumbs'
import { LoadingContainer } from '@/components/generic/molecules/LoadingContainer'
import { Pagination } from '@/components/generic/organisms/Pagination'
import { twMerge } from 'tailwind-merge'
import { useGetCategoriesBlogBodyProps } from './hooks/useGetCategoriesBlogBodyProps'

const CategoriesBlogBody = (): JSX.Element => {
  const { paths, articles, changePage, loading, page, totalPages, blogType } =
    useGetCategoriesBlogBodyProps()

  return (
    <section
      className={twMerge(
        blogType,
        'pt-2 flex flex-col gap-9',
        'lg:pt-4 lg:gap-8'
      )}
    >
      <BreadCrumbs
        paths={paths}
        wrapperElementClassName="ml-2"
        textClassName="text-theme-blog-secondary-color-140 nth-last-child-2:text-theme-blog-secondary-color-100"
        iconClassName="text-theme-blog-secondary-color-140 nth-last-child-2:text-theme-blog-secondary-color-100"
      />

      <Title
        tag="h2"
        className={twMerge(
          'text-neutral-130 text-2xl font-ZonaPro',
          'lg:text-[2.5rem]'
        )}
      >
        Carreira
      </Title>

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

export { CategoriesBlogBody }
