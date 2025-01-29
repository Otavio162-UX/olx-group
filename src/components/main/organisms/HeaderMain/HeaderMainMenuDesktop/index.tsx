'use client'

import { ButtonCollapsible } from '@/components/generic/molecules/ButtonCollapsible'
import { IHeaderMainMenuDesktop } from './HeaderMainMenuDesktop.interface'
import { changeHeaderDesktopColors } from './functions/changeHeaderDesktopColors'

const HeaderMainMenuDesktop = ({
  headerMenu,
}: IHeaderMainMenuDesktop): JSX.Element[] => {
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

export { HeaderMainMenuDesktop }
