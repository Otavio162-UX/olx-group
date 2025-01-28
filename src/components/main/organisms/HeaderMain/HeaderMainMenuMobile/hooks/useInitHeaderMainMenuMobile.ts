'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { changeHeaderMobileColors } from '../functions/changeHeaderMobileColors'

interface IReturnUseInitHeaderMainMenuMobile {
  openMobileMenu: boolean
  toggleMobileMenu: VoidFunction
}

export const useInitHeaderMainMenuMobile =
  (): IReturnUseInitHeaderMainMenuMobile => {
    const pathname = usePathname()

    const [openMobileMenu, setOpenMobileMenu] = useState(false)

    const toggleMobileMenu = () => {
      setOpenMobileMenu((prevState) => {
        changeHeaderMobileColors({ openMenu: !prevState })
        return !prevState
      })
    }

    const closeMobileMenu = () => {
      changeHeaderMobileColors({ openMenu: false })
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
