import { MouseEventHandler, ReactNode } from 'react'

export type TTabinationButtonVariants = 'active' | 'inactive'

export interface ITabinationButton {
  variant?: TTabinationButtonVariants
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}
