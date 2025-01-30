import { ComponentProps, ReactNode } from 'react'

export interface ILabel
  extends Omit<ComponentProps<'label'>, 'id' | 'children'> {
  id: string
  children: ReactNode
}
