'use client'

import { useGetHeaderBlogMenuProps } from '@/components/blog/templates/HeaderBlog/hooks/useGetHeaderBlogMenuProps'
import { ButtonCollapsible } from '@/components/generic/molecules/ButtonCollapsible'
import { SearchInput } from '@/components/generic/organisms/SearchInput'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const HeaderBlogDesktop = (): JSX.Element => {
  const [search, setSearch] = useState('')

  const headerBlogMenu = useGetHeaderBlogMenuProps()

  return (
    <nav className={twMerge('hidden', 'lg:flex lg:items-center lg:gap-8')}>
      <div className={'w-[25rem]'}>
        <SearchInput
          value={search}
          onChange={({ target }) => setSearch(target.value)}
          onClick={() => console.log(search)}
        />
      </div>

      <div className="flex items-center gap-4">
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
