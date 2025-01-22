import { ComponentProps, ElementType, ReactNode } from 'react'

export type TTitleTag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type TTitleVariants = 'sectionTitle' | 'titleTab'

export type TTitle<T extends ElementType = TTitleTag> = {
  tag?: T
  variant?: TTitleVariants
  children: ReactNode
} & Omit<ComponentProps<T>, 'children'>
