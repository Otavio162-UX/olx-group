'use client'

import { Button } from '@/components/generic/atoms/Button'
import { twMerge } from 'tailwind-merge'
import { IPaginationButton } from './PaginationButton.interface'
import { paginationButtonProps } from './variables/paginationButtonProps'

const PaginationButton = ({
  onClick,
  children,
  disabled,
  variant,
}: IPaginationButton) => {
  const { classNameVariants } = paginationButtonProps

  return (
    <Button
      variant="clean"
      className={twMerge(
        'w-9 h-9 rounded-full flex items-center justify-center text-sm px-0 py-0 transition-all',
        'md:w-14 md:h-14 md:text-base',
        classNameVariants[variant]
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </Button>
  )
}

export { PaginationButton }
