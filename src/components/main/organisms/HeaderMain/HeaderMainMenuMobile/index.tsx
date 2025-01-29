'use client'

import { Button } from '@/components/generic/atoms/Button'
import { HeaderMainDropDownMobile } from '@/components/main/organisms/HeaderMain/HeaderMainDropDownMobile'
import { mdiMenu } from '@mdi/js'
import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'
import { useInitHeaderMainMenuMobile } from './hooks/useInitHeaderMainMenuMobile'

const HeaderMenuMobile = (): JSX.Element => {
  const { openMobileMenu, toggleMobileMenu } = useInitHeaderMainMenuMobile()

  return (
    <div className={twMerge('flex items-center h-full ', 'lg:hidden')}>
      <Button
        variant="clean"
        onClick={toggleMobileMenu}
        className="text-header-mobile-icons pl-2 py-2 pr-0"
      >
        <Icon path={mdiMenu} size={1} />
      </Button>

      {openMobileMenu && <HeaderMainDropDownMobile />}
    </div>
  )
}

export { HeaderMenuMobile }
