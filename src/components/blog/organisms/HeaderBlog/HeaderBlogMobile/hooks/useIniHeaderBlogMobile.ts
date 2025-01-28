'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface IReturnUseInitHeaderBlogMobile {
  openMobileMenu: boolean
  toggleMobileMenu: VoidFunction
}

export const useInitHeaderBlogMobile = (): IReturnUseInitHeaderBlogMobile => {
  const pathname = usePathname()

  const [openMobileMenu, setOpenMobileMenu] = useState(false)

  const toggleMobileMenu = () => {
    setOpenMobileMenu((prevState) => !prevState)
  }

  const closeMobileMenu = () => {
    setOpenMobileMenu(false)
  }

  useEffect(() => {
    closeMobileMenu()
  }, [pathname])

  return {
    openMobileMenu,
    toggleMobileMenu,
  }
}
