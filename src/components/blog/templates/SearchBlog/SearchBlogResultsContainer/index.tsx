'use client'

import { SearchBlogEmptyData } from '@/components/blog/organisms/SearchBlog/SearchBlogEmptyData'
import { SearchBlogTab } from '@/components/blog/organisms/SearchBlog/SearchBlogTab'
import { Title } from '@/components/generic/atoms/Title'
import { BreadCrumbs } from '@/components/generic/molecules/BreadCrumbs'
import { SearchInput } from '@/components/generic/organisms/SearchInput'
import { Tabination } from '@/components/generic/organisms/Tabination'
import { twMerge } from 'tailwind-merge'
import { searchBlogResultsContainerButtonsTab } from './arrays/searchBlogResultsContainerButtonsTabs'
import { useSearchBlogResultsContainer } from './hooks/useSearchBlogResultsContainer'

const SearchBlogResultsContainer = (): JSX.Element => {
  const {
    blogType,
    search,
    setSearch,
    handleSearch,
    searchParams,
    searchDataIsEmpty,
    setSearchDataIsEmpty,
  } = useSearchBlogResultsContainer()

  console.log(searchDataIsEmpty)

  return (
    <section
      className={twMerge(
        blogType,
        'pt-2 flex flex-col gap-9',
        'lg:pt-4 lg:gap-8'
      )}
    >
      <BreadCrumbs
        paths={['Blog', 'Busca']}
        wrapperElementClassName="ml-2"
        textClassName="text-theme-blog-secondary-color-140 nth-last-child-2:text-theme-blog-secondary-color-100"
        iconClassName="text-theme-blog-secondary-color-140 nth-last-child-2:text-theme-blog-secondary-color-100"
      />

      <Title
        tag="h4"
        className={twMerge('text-neutral-120 font-medium text-2xl')}
      >
        Resultados para:
      </Title>

      <SearchInput
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        onClick={handleSearch}
        minLength={1}
        maxLength={100}
      />

      {!searchDataIsEmpty ? (
        <div>
          <Tabination
            tabinationButtonsWrapperClassName={twMerge(
              'lg:flex lg:justify-center'
            )}
            variantActive="activeBlog"
            buttonsTab={searchBlogResultsContainerButtonsTab}
            resetStateOnChange={searchParams}
          >
            {searchBlogResultsContainerButtonsTab.map((item, indexItem) => (
              <SearchBlogTab
                key={`search-tab-${indexItem}`}
                tabId={item.id}
                setSearchDataIsEmpty={setSearchDataIsEmpty}
              />
            ))}
          </Tabination>
        </div>
      ) : (
        <SearchBlogEmptyData />
      )}
    </section>
  )
}

export { SearchBlogResultsContainer }
