import { ReactNode } from 'react'

export type TCategoryVariants = 'orange' | 'orange-light' | 'green'

export type TCategoryTypeVersion = 'smaller'

export interface ICategoryCard {
  variant: TCategoryVariants
  className?: string
  children: ReactNode
  version?: TCategoryTypeVersion
}
