import { MouseEventHandler, ReactNode } from 'react'

export type TButtonColorVariants = 'orange' | 'green'

export interface IButtonColor {
  variant: TButtonColorVariants
  onClick?: MouseEventHandler<HTMLButtonElement>
  children: ReactNode
}
