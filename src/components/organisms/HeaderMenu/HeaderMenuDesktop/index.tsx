'use client'

import { ButtonCollapsible } from '@/components/molecules/ButtonCollapsible'
import { IDesktopMenu } from './HeaderMenuDesktop.interface'
import { changeHeaderDesktopColors } from './functions/changeHeaderDesktopColors'

const HeaderMenuDesktop = ({ headerMenu }: IDesktopMenu): JSX.Element[] => {
  return headerMenu.map((item, indexItem) => (
    <ButtonCollapsible
      key={`button-desktop-menu-${indexItem}`}
      buttonTitle={item.buttonTitle}
      link={item.link}
      changeHeaderColors={changeHeaderDesktopColors}
      iconProps={item.iconProps}
    >
      {item.children}
    </ButtonCollapsible>
  ))
}

export { HeaderMenuDesktop }
