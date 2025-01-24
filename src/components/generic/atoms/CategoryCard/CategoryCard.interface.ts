import { TBlogVariants } from '@/types/global'
import { ReactNode } from 'react'

export type TCategoryTypeVersion = 'smaller'

export interface ICategoryCard {
  variant: TBlogVariants
  className?: string
  children: ReactNode
  version?: TCategoryTypeVersion
}
