'use client'

import { DropDownMobile } from '@/components/organisms/DropDown/DropDownMobile'
import { IoIosMenu } from 'react-icons/io'
import { twMerge } from 'tailwind-merge'
import { useInitMobileMenu } from '.'

const MobileMenu = (): JSX.Element => {
  const { openMobileMenu, toggleMobileMenu, ref } = useInitMobileMenu()

  return (
    <div
      ref={ref}
      className={twMerge('flex items-center h-full ', 'lg:hidden')}
    >
      <IoIosMenu
        className="text-header-mobile-icons text-4xl pl-2 py-2"
        onClick={toggleMobileMenu}
      />

      {openMobileMenu && <DropDownMobile />}
    </div>
  )
}

export { MobileMenu }
