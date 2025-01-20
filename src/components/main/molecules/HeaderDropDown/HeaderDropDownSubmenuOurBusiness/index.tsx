'use client'

import { Title } from '@/components/generic/atoms/Title'
import { mdiChevronRight } from '@mdi/js'
import Icon from '@mdi/react'
import Link from 'next/link'
import { twMerge } from 'tailwind-merge'
import { IHeaderDropDownSubmenuOurBusiness } from './HeaderDropDownSubmenuOurBusiness.interface'

const HeaderDropDownSubmenuOurBusiness = ({
  submenu,
  titleClassName,
}: IHeaderDropDownSubmenuOurBusiness): JSX.Element[] => {
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
          <Icon path={mdiChevronRight} size={1} />
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

export { HeaderDropDownSubmenuOurBusiness }
