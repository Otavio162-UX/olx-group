import { MouseEventHandler, ReactNode } from 'react'

export type TButtonTabinationVariants = 'active' | 'inactive'

export interface IButtonTabination {
  variant?: TButtonTabinationVariants
  onClick: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}
