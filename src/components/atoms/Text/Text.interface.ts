import { ComponentProps, ReactNode } from 'react'

export type TTextVariants =
  | 'very-small'
  | 'small'
  | 'medium'
  | 'large'
  | 'very-large'
  | 'big'
  | 'very-big'

export interface IText extends Omit<ComponentProps<'p'>, 'children'> {
  variant?: TTextVariants
  children: ReactNode
}
