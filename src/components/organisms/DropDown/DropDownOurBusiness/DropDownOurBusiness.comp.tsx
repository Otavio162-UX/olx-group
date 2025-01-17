'use client'

import { Title } from '@/components/atoms/Title'
import { WrapperDropDown } from '@/components/molecules/DropDown/WrapperDropDown'
import { ButtonMenu } from '@/components/molecules/Menu/ButtonMenu'
import Link from 'next/link'
import { IoIosArrowForward } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import { ourBusinessSubmenu, TSubmenuOurBusiness } from '.'

const RenderSubmenuOurBusiness = ({
  submenu,
  titleClassName,
}: {
  submenu: TSubmenuOurBusiness[]
  titleClassName?: string
}): JSX.Element[] => {
  return submenu.map((submenu, indexSubmenu) =>
    submenu.link ? (
      <Link
        href={submenu.link}
        key={`our-business-submenu-items-${indexSubmenu}`}
      >
        <Title
          tag="h6"
          className={twMerge(
            'font-ZonaPro text-primary-70 flex items-center gap-2 justify-between w-full text-base text-nowrap',
            'lg:text-neutral-70',
            titleClassName
          )}
        >
          {submenu.title}
          <IoIosArrowForward className="text-[1.75rem] p-1" />
        </Title>
      </Link>
    ) : (
      <Title
        key={`our-business-submenu-items-${indexSubmenu}`}
        tag="h6"
        className={twMerge(
          'font-ZonaPro text-primary-70 flex items-center gap-2 text-base text-nowrap',
          titleClassName
        )}
      >
        {submenu.title}
      </Title>
    )
  )
}

const DropDownOurBusiness = (): JSX.Element => {
  return (
    <WrapperDropDown>
      <div className={twMerge('block', 'lg:hidden')}>
        {ourBusinessSubmenu.map((item, indexItem) => (
          <ButtonMenu
            key={`our-business-submenu-title-${indexItem}`}
            buttonTitle={item.title}
            buttonClassName="pl-8 pr-0"
            Icon={IoIosArrowForward}
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
              Icon={IoIosArrowForward}
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
