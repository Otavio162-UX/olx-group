import { ReactNode } from 'react'

export interface IButtonTabProps {
  id: string
  children: ReactNode
}

export interface ITabination {
  wrapperElementClassName?: string
  wrapperRightComponentClassName?: string
  tabinationButtonsWrapperClassName?: string

  RightComponent?: JSX.Element
  children: JSX.Element | JSX.Element[]
  buttonsTab: IButtonTabProps[]
}
