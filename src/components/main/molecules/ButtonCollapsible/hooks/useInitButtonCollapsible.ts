'use client'

import { useRouter } from 'next/navigation'
import { MutableRefObject, useState } from 'react'
import {
  IUseClickOutButtonCollapsible,
  useClickOutButtonCollapsible,
} from './useClickOutButtonCollapsible'

interface IUseInitButtonCollapsible
  extends Pick<IUseClickOutButtonCollapsible, 'changeHeaderColors'> {
  link?: string
  menuOpenRedirect?: boolean
}

interface IReturnUseInitButtonCollapsible {
  toggleMenu: VoidFunction
  ref: MutableRefObject<HTMLDivElement | null>
  openMenu: boolean
  buttonsTargetId: string
}

export const useInitButtonCollapsible = ({
  link,
  changeHeaderColors,
  menuOpenRedirect,
}: IUseInitButtonCollapsible): IReturnUseInitButtonCollapsible => {
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

  const ref = useClickOutButtonCollapsible({
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
