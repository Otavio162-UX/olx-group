'use client'

import { useGetHeaderBlogMenuProps } from '@/components/blog/templates/HeaderBlog/hooks/useGetHeaderBlogMenuProps'
import { ButtonCollapsible } from '@/components/generic/molecules/ButtonCollapsible'
import { SearchInput } from '@/components/generic/organisms/SearchInput'
import { useSearchBlog } from '@/hooks/blog/useSearchBlog'
import { twMerge } from 'tailwind-merge'

const HeaderBlogDesktop = (): JSX.Element => {
  const { search, setSearch, handleSearch } = useSearchBlog()

  const headerBlogMenu = useGetHeaderBlogMenuProps()

  return (
    <nav
      className={twMerge(
        'hidden',
        'lg:flex lg:items-center lg:gap-8 lg:h-full'
      )}
    >
      <div className={'w-[25rem]'}>
        <SearchInput
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          onClick={handleSearch}
          minLength={1}
          maxLength={100}
        />
      </div>

      <div className="flex items-center gap-4 h-full">
        {headerBlogMenu.map((item, indexItem) => (
          <ButtonCollapsible
            key={`button-desktop-menu-${indexItem}`}
            buttonTitle={item.buttonTitle}
            link={item.link}
            iconProps={item.iconProps}
          >
            {item.children}
          </ButtonCollapsible>
        ))}
      </div>
    </nav>
  )
}

export { HeaderBlogDesktop }
