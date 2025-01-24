'use client'

import { Pagination } from '@/components/generic/organisms/Pagination'
import { useState } from 'react'
import { twMerge } from 'tailwind-merge'

const HomeBlogArticles = (): JSX.Element => {
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(10)
  const [loading, setLoading] = useState(false)

  return (
    <section className={twMerge('lg:pt-10')}>
      <Pagination
        loading={loading}
        page={page}
        totalPages={totalPages}
        changePage={(newPage) => setPage(newPage)}
      />
    </section>
  )
}

export { HomeBlogArticles }
