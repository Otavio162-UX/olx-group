'use client'

import { RenderSubmenuOurBusiness } from '@/components/molecules/DropDown/RenderSubmenuOurBusiness'
import { WrapperDropDown } from '@/components/molecules/DropDown/WrapperDropDown'
import { ButtonMenu } from '@/components/molecules/Menu/ButtonMenu'
import { mdiChevronRight } from '@mdi/js'
import { twMerge } from 'tailwind-merge'
import { ourBusinessSubmenu } from './variables/ourBusinessSubmenu'

const DropDownOurBusiness = (): JSX.Element => {
  return (
    <WrapperDropDown>
      <div className={twMerge('block', 'lg:hidden')}>
        {ourBusinessSubmenu.map((item, indexItem) => (
          <ButtonMenu
            key={`our-business-submenu-title-${indexItem}`}
            buttonTitle={item.title}
            buttonClassName="pl-8 pr-0"
            iconPath={mdiChevronRight}
            iconClassName="rotate-0"
            menuOpenRedirect
            link={item.link}
          >
            <div className="flex flex-col gap-8">
              <RenderSubmenuOurBusiness
                submenu={item.submenu}
                titleClassName={'pl-[4.5rem]'}
              />
            </div>
          </ButtonMenu>
        ))}
      </div>

      <div className={twMerge('hidden', 'lg:flex gap-12', 'xl:gap-[5.5rem]')}>
        {ourBusinessSubmenu.map((item, indexItem) => (
          <div
            key={`our-business-desktop-${indexItem}`}
            className="flex flex-col gap-4"
          >
            <ButtonMenu
              link={item.link}
              buttonTitle={item.title}
              wrapperElementClassName={twMerge('lg:h-max')}
              buttonClassName={twMerge('lg:text-lg font-ZonaPro lg:py-0')}
              iconPath={mdiChevronRight}
            />

            <div className="flex flex-col gap-6">
              <RenderSubmenuOurBusiness submenu={item.submenu} />
            </div>
          </div>
        ))}
      </div>
    </WrapperDropDown>
  )
}

export { DropDownOurBusiness }
