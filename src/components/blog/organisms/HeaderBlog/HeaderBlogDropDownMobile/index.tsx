import { headerBlogMenu } from '@/components/blog/templates/HeaderBlog/arrays/headerBlogMenu'
import { ButtonCollapsible } from '@/components/generic/molecules/ButtonCollapsible'
import { SearchInput } from '@/components/generic/organisms/SearchInput'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const HeaderBlogDropDownMobile = () => {
  const [searchInput, setSearchInput] = useState('')

  return (
    <nav
      className={twMerge(
        'bg-neutral-70 min-w-minContainer w-full absolute top-full left-0 z-20 py-6 h-[calc(100vh_-_72px)] overflow-y-auto'
      )}
    >
      <div className="wrapperContainer max-w-container1328 flex flex-col gap-4">
        <div className="flex flex-col gap-8">
          <SearchInput
            value={searchInput}
            onChange={({ target }) => setSearchInput(target.value)}
            onClick={() => console.log(searchInput)}
          />

          <div>
            {headerBlogMenu.map((item, indexItem) => (
              <ButtonCollapsible
                key={`button-menu-${indexItem}`}
                link={item.link}
                buttonTitle={item.buttonTitle}
                iconProps={{
                  ...item.iconProps,
                  iconClassName: 'text-neutral-130',
                }}
                buttonClassName="bg-neutral-70 text-neutral-130 px-0 mx-auto"
              >
                {item.children}
              </ButtonCollapsible>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}

export { HeaderBlogDropDownMobile }
