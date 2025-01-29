'use client'

import { HomeBlogTitleGroup } from '@/components/blog/molecules/HomeBlog/HomeBlogTitleGroup'
import { BlogEbookCard } from '@/components/blog/organisms/BlogEbookCard'
import { LoadingContainer } from '@/components/generic/molecules/LoadingContainer'
import { Pagination } from '@/components/generic/organisms/Pagination'
import { twMerge } from 'tailwind-merge'
import { useGetHomeBlogEbooks } from './hooks/useGetHomeBlogEbooks'

const HomeBlogEbooks = (): JSX.Element => {
  const { page, totalPages, loading, changePage, ebooks } =
    useGetHomeBlogEbooks()

  return (
    <section className={twMerge('pb-9 flex flex-col gap-10', 'lg:pb-10')}>
      <HomeBlogTitleGroup textHighlight="Destaques" title="E-books" />

      {loading ? (
        <LoadingContainer
          wrapperElementClassName={twMerge('h-[63rem]', 'lg:h-[14.375rem]')}
        />
      ) : (
        <div
          className={twMerge(
            'grid grid-cols-1 gap-6',
            'md:grid-cols-2',
            'lg:grid-cols-4'
          )}
        >
          {ebooks.map((ebook, indexEbook) => (
            <BlogEbookCard
              key={`home-blog-ebook-card-${indexEbook}`}
              {...ebook}
            />
          ))}
        </div>
      )}

      <Pagination
        page={page}
        totalPages={totalPages}
        changePage={changePage}
        loading={loading}
      />
    </section>
  )
}

export { HomeBlogEbooks }
