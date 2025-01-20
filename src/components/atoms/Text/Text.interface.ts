import { ComponentProps, ReactNode } from 'react'

export type TTextTag = 'p' | 'span' | 'strong' | 'small'

export type TText = {
  tag: TTextTag
  children: ReactNode
} & Omit<ComponentProps<'p'>, 'children'>
