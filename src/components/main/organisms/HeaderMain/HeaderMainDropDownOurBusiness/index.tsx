'use client'

import { ButtonCollapsible } from '@/components/generic/molecules/ButtonCollapsible'
import { HeaderMainDropDownSubmenuOurBusiness } from '@/components/main/molecules/HeaderMain/HeaderMainDropDownSubmenuOurBusiness'
import { HeaderMainDropDownWrapper } from '@/components/main/molecules/HeaderMain/HeaderMainDropDownWrapper'
import { twMerge } from 'tailwind-merge'
import { headerMainDropDownOurBusinessProps } from './variables/headerMainDropDownOurBusinessProps'

const HeaderMainDropDownOurBusiness = (): JSX.Element => {
  const { submenu, buttonIconProps } = headerMainDropDownOurBusinessProps
  return (
    <HeaderMainDropDownWrapper>
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
              <HeaderMainDropDownSubmenuOurBusiness
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
              <HeaderMainDropDownSubmenuOurBusiness submenu={item.submenu} />
            </div>
          </div>
        ))}
      </div>
    </HeaderMainDropDownWrapper>
  )
}

export { HeaderMainDropDownOurBusiness }
