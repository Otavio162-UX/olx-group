import { IconType } from 'react-icons'
import { IUseClickOutside } from '.'

export interface IButtonMenu
  extends Pick<IUseClickOutside, 'changeHeaderColors'> {
  wrapperElementClassName?: string
  buttonClassName?: string
  iconClassName?: string

  link?: string
  buttonTitle: string
  children?: JSX.Element
  Icon?: IconType
  menuOpenRedirect?: boolean
}
