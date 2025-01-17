import { useClickOutside } from '@/hooks/useClickOutside'
import { MutableRefObject, useState } from 'react'
import { changeHeaderMobileColors } from '..'

interface IReturnUseInitMobileMenu {
  openMobileMenu: boolean
  toggleMobileMenu: VoidFunction
  ref: MutableRefObject<HTMLDivElement | null>
}

export const useInitMobileMenu = (): IReturnUseInitMobileMenu => {
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

  const ref = useClickOutside({ onClickOutside: closeMobileMenu })

  return {
    openMobileMenu,
    toggleMobileMenu,
    ref,
  }
}
