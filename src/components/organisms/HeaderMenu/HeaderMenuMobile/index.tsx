'use client'

import { Button } from '@/components/atoms/Button'
import { HeaderDropDownMobile } from '@/components/organisms/HeaderDropDown/HeaderDropDownMobile'
import { mdiMenu } from '@mdi/js'
import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'
import { useInitHeaderMenuMobile } from './hooks/useIniHeaderMenuMobile'

const HeaderMenuMobile = (): JSX.Element => {
  const { openMobileMenu, toggleMobileMenu, ref } = useInitHeaderMenuMobile()

  return (
    <div
      ref={ref}
      className={twMerge('flex items-center h-full ', 'lg:hidden')}
    >
      <Button
        variant="clean"
        onClick={toggleMobileMenu}
        className="text-header-mobile-icons pl-2 py-2 pr-0"
      >
        <Icon path={mdiMenu} size={1} />
      </Button>

      {openMobileMenu && <HeaderDropDownMobile />}
    </div>
  )
}

export { HeaderMenuMobile }
