export interface IButtonTabProps {
  id: string
  children: string
}

export interface ITabination {
  wrapperElementClassName?: string
  wrapperRightComponentClassName?: string
  tabinationButtonsWrapperClassName?: string

  RightComponent?: JSX.Element
  children: JSX.Element | JSX.Element[]
  buttonsTab: IButtonTabProps[]
  variantActive?: 'activeBlog' | 'active'
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  resetStateOnChange?: any
}
