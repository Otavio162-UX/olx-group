'use client'

import { PaginationButton } from '@/components/generic/atoms/Pagination/PaginationButton'
import { memo, ReactNode } from 'react'

interface PaginationIInitialOrLastButton {
  children: ReactNode
  onClick: () => void
  loading: boolean
}

const PaginationInitialOrLastButton = memo(
  ({ onClick, children, loading }: PaginationIInitialOrLastButton) => {
    return (
      <PaginationButton variant="inactive" onClick={onClick} disabled={loading}>
        {children}
      </PaginationButton>
    )
  }
)

PaginationInitialOrLastButton.displayName = 'PaginationInitialOrLastButton'

export { PaginationInitialOrLastButton }
