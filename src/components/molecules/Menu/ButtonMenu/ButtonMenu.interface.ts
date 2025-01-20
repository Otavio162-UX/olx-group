import { IUseClickOutside } from './hooks/useClickOutButtonsMenu'

export interface IButtonIconProps {
  iconPath?: string
  iconClassName?: string
  show?: boolean
}

export interface IButtonMenu
  extends Pick<IUseClickOutside, 'changeHeaderColors'> {
  wrapperElementClassName?: string
  buttonClassName?: string

  iconProps?: IButtonIconProps
  link?: string
  buttonTitle: string
  children?: JSX.Element
  menuOpenRedirect?: boolean
}
