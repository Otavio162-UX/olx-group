'use client'

import { useRouter } from 'next/navigation'
import { MutableRefObject, useState } from 'react'
import { IUseClickOutside, useClickOutButtonsMenu } from '.'

interface IUseInitButtonMenu
  extends Pick<IUseClickOutside, 'changeHeaderColors'> {
  link?: string
  menuOpenRedirect?: boolean
}

interface IReturnUseInitButtonMenu {
  toggleMenu: VoidFunction
  ref: MutableRefObject<HTMLDivElement | null>
  openMenu: boolean
  buttonsTargetId: string
}

export const useInitButtonMenu = ({
  link,
  changeHeaderColors,
  menuOpenRedirect,
}: IUseInitButtonMenu): IReturnUseInitButtonMenu => {
  const router = useRouter()

  const [openMenu, setOpenMenu] = useState(false)

  const buttonsTargetId = 'buttonsMenu'

  const toggleMenu = () => {
    if ((link && !menuOpenRedirect) || (link && openMenu && menuOpenRedirect)) {
      router.push(link)
    } else {
      setOpenMenu((prevState) => {
        if (changeHeaderColors) changeHeaderColors({ openMenu: !prevState })
        return !prevState
      })
    }
  }

  const ref = useClickOutButtonsMenu({
    setOpenMenu,
    targetId: buttonsTargetId,
    changeHeaderColors,
  })

  return {
    ref,
    toggleMenu,
    openMenu,
    buttonsTargetId,
  }
}
