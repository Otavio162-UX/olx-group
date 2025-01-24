'use client'

import { twMerge } from 'tailwind-merge'

import { PaginationButton } from '@/components/generic/atoms/Pagination/PaginationButton'
import { PaginationEllipsisButton } from '@/components/generic/atoms/Pagination/PaginationEllipsisButton'
import { PaginationInitialOrLastButton } from '@/components/generic/molecules/Pagination/PaginationInitialOrLastButton'
import { getButtonRange } from './functions/getButtonRange'
import { IPagination } from './Pagination.interface'

const Pagination = ({
  page,
  totalPages,
  changePage,
  loading,
}: IPagination): JSX.Element => {
  const currentPage = page + 1

  const buttonRange = getButtonRange({ currentPage, totalPages })

  return (
    <div
      className={twMerge('mx-auto w-max flex items-center gap-2', 'lg:gap-6')}
    >
      <div className="flex items-center gap-2">
        {currentPage > 3 && (
          <>
            <PaginationInitialOrLastButton
              onClick={() => changePage(0)}
              loading={loading}
            >
              1
            </PaginationInitialOrLastButton>

            {currentPage > 4 && (
              <PaginationEllipsisButton
                onClick={() => changePage(page - 3)}
                loading={loading}
              />
            )}
          </>
        )}

        {buttonRange.map((pageNumber) => (
          <PaginationButton
            key={pageNumber}
            variant={pageNumber === currentPage ? 'active' : 'inactive'}
            onClick={() => changePage(pageNumber - 1)}
            disabled={loading}
          >
            {pageNumber}
          </PaginationButton>
        ))}

        {currentPage < totalPages - 2 && (
          <>
            {currentPage < totalPages - 3 && (
              <PaginationEllipsisButton
                onClick={() => changePage(page + 3)}
                loading={loading}
              />
            )}

            <PaginationInitialOrLastButton
              onClick={() => changePage(totalPages - 1)}
              loading={loading}
            >
              {totalPages}
            </PaginationInitialOrLastButton>
          </>
        )}
      </div>
    </div>
  )
}

export { Pagination }
