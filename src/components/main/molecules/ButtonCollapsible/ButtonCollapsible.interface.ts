import { IUseClickOutButtonCollapsible } from './hooks/useClickOutButtonCollapsible'

export interface IButtonCollapsibleProps {
  iconPath?: string
  iconClassName?: string
  show?: boolean
}

export interface IButtonCollapsible
  extends Pick<IUseClickOutButtonCollapsible, 'changeHeaderColors'> {
  wrapperElementClassName?: string
  buttonClassName?: string

  iconProps?: IButtonCollapsibleProps
  link?: string
  buttonTitle: string
  children?: JSX.Element
  menuOpenRedirect?: boolean
}
