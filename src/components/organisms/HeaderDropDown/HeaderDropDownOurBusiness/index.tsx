'use client'

import { ButtonCollapsible } from '@/components/molecules/ButtonCollapsible'
import { HeaderDropDownSubmenuOurBusiness } from '@/components/molecules/HeaderDropDown/HeaderDropDownSubmenuOurBusiness'
import { HeaderDropDownWrapper } from '@/components/molecules/HeaderDropDown/HeaderDropDownWrapper'
import { twMerge } from 'tailwind-merge'
import { headerDropDownOurBusinessProps } from './variables/headerDropDownOurBusinessProps'

const HeaderDropDownOurBusiness = (): JSX.Element => {
  const { submenu, buttonIconProps } = headerDropDownOurBusinessProps
  return (
    <HeaderDropDownWrapper>
      <div className={twMerge('block', 'lg:hidden')}>
        {submenu.map((item, indexItem) => (
          <ButtonCollapsible
            key={`our-business-submenu-title-${indexItem}`}
            buttonTitle={item.title}
            buttonClassName="pl-8 pr-0"
            iconProps={buttonIconProps}
            menuOpenRedirect
            link={item.link}
          >
            <div className="flex flex-col gap-8">
              <HeaderDropDownSubmenuOurBusiness
                submenu={item.submenu}
                titleClassName={'pl-[4.5rem]'}
              />
            </div>
          </ButtonCollapsible>
        ))}
      </div>

      <div className={twMerge('hidden', 'lg:flex gap-12', 'xl:gap-[5.5rem]')}>
        {submenu.map((item, indexItem) => (
          <div
            key={`our-business-desktop-${indexItem}`}
            className="flex flex-col gap-4"
          >
            <ButtonCollapsible
              link={item.link}
              buttonTitle={item.title}
              wrapperElementClassName={twMerge('lg:h-max')}
              buttonClassName={twMerge('lg:text-lg font-ZonaPro lg:py-0')}
              iconProps={buttonIconProps}
            />

            <div className="flex flex-col gap-6">
              <HeaderDropDownSubmenuOurBusiness submenu={item.submenu} />
            </div>
          </div>
        ))}
      </div>
    </HeaderDropDownWrapper>
  )
}

export { HeaderDropDownOurBusiness }
