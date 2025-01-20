'use client'

import { SearchInput } from '@/components/generic/organisms/SearchInput'
import { useState } from 'react'

const HeaderBlogSearchInput = (): JSX.Element => {
  const [search, setSearch] = useState('')

  return (
    <div className={'w-[25rem]'}>
      <SearchInput
        value={search}
        onChange={({ target }) => setSearch(target.value)}
        onClick={() => console.log(search)}
      />
    </div>
  )
}

export { HeaderBlogSearchInput }
