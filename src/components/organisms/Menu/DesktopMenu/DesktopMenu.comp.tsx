'use client'

import { ButtonMenu } from '@/components/molecules/Menu/ButtonMenu'
import { changeHeaderDesktopColors, IDesktopMenu } from '.'

const DesktopMenu = ({ menu }: IDesktopMenu): JSX.Element[] => {
  return menu.map((item, indexItem) => (
    <ButtonMenu
      key={`button-desktop-menu-${indexItem}`}
      {...item}
      changeHeaderColors={changeHeaderDesktopColors}
    />
  ))
}

export { DesktopMenu }
