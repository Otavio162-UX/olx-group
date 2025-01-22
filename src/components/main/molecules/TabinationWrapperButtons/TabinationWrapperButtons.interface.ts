import { ReactNode } from 'react'

export interface ICanScrollState {
  left: boolean
  right: boolean
}

export interface ITabinationWrapperButtons {
  wrapperElementClassName?: string
  children: ReactNode
}
