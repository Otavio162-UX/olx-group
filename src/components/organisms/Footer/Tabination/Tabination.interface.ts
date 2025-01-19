import { ReactNode } from 'react'

export interface IButtonTabProps {
  id: string
  children: ReactNode
}

export interface ITabination {
  children: JSX.Element | JSX.Element[]
  buttonsTab: IButtonTabProps[]
}
