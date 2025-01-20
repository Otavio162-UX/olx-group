'use client'

import { ButtonMenu } from '@/components/molecules/Menu/ButtonMenu'
import { IDesktopMenu } from './DesktopMenu.interface'
import { changeHeaderDesktopColors } from './functions/changeHeaderDesktopColors'

const DesktopMenu = ({ menu }: IDesktopMenu): JSX.Element[] => {
  return menu.map((item, indexItem) => (
    <ButtonMenu
      key={`button-desktop-menu-${indexItem}`}
      buttonTitle={item.buttonTitle}
      link={item.link}
      changeHeaderColors={changeHeaderDesktopColors}
      iconProps={item.iconProps}
    >
      {item.children}
    </ButtonMenu>
  ))
}

export { DesktopMenu }
