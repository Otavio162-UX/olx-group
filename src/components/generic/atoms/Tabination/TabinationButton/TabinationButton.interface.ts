import { MouseEventHandler, ReactNode } from 'react'

export type TTabinationButtonVariants = 'active' | 'inactive' | 'activeBlog'

export interface ITabinationButton {
  variant?: TTabinationButtonVariants
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}
