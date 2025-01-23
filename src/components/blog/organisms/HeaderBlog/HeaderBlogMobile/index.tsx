'use client'

import { HeaderBlogDropDownMobile } from '@/components/blog/organisms/HeaderBlog/HeaderBlogDropDownMobile'
import { Button } from '@/components/generic/atoms/Button'
import { mdiMenu, mdiWindowClose } from '@mdi/js'
import Icon from '@mdi/react'
import { twMerge } from 'tailwind-merge'
import { useInitHeaderBlogMobile } from './hooks/useIniHeaderBlogMobile'

const HeaderBlogMobile = (): JSX.Element => {
  const { openMobileMenu, toggleMobileMenu } = useInitHeaderBlogMobile()

  const currentMenuIcon = openMobileMenu ? mdiWindowClose : mdiMenu

  return (
    <div className={twMerge('block', 'lg:hidden')}>
      <Button
        variant="clean"
        className="text-orange-100 p-0"
        onClick={toggleMobileMenu}
      >
        <Icon path={currentMenuIcon} size={1} />
      </Button>

      {openMobileMenu && <HeaderBlogDropDownMobile />}
    </div>
  )
}

export { HeaderBlogMobile }
