import { MouseEventHandler, ReactNode } from 'react'

export type TPaginationButtonVariants = 'active' | 'inactive'

export interface IPaginationButton {
  variant: TPaginationButtonVariants
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
  disabled: boolean
}
