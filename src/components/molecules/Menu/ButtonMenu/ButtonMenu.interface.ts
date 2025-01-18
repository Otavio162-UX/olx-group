import { IUseClickOutside } from './hooks/useClickOutButtonsMenu'

export interface IButtonMenu
  extends Pick<IUseClickOutside, 'changeHeaderColors'> {
  wrapperElementClassName?: string
  buttonClassName?: string
  iconClassName?: string

  link?: string
  buttonTitle: string
  children?: JSX.Element
  iconPath?: string
  menuOpenRedirect?: boolean
}
