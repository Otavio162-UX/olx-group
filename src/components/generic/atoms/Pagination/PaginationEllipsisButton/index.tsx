'use client'

import { Button } from '@/components/generic/atoms/Button'
import { memo } from 'react'
import { twMerge } from 'tailwind-merge'

interface IPaginationEllipsisButton {
  onClick: () => void
  loading: boolean
}

const PaginationEllipsisButton = memo(
  ({ loading, onClick }: IPaginationEllipsisButton): JSX.Element => {
    return (
      <Button
        variant="clean"
        className={twMerge(
          'text-primary-100 text-sm pt-4 px-0 pb-0',
          'md:text-base md:pt-8'
        )}
        onClick={onClick}
        disabled={loading}
      >
        ...
      </Button>
    )
  }
)

PaginationEllipsisButton.displayName = 'PaginationEllipsisButton'

export { PaginationEllipsisButton }
