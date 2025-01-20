'use client'

import {
  Dispatch,
  MutableRefObject,
  SetStateAction,
  useEffect,
  useRef,
} from 'react'

interface IChangeHeaderColorsProps {
  openMenu: boolean
}

export interface IUseClickOutButtonCollapsible {
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  targetId?: string
  changeHeaderColors?: (props: IChangeHeaderColorsProps) => void
}

export const useClickOutButtonCollapsible = ({
  setOpenMenu,
  targetId,
  changeHeaderColors,
}: IUseClickOutButtonCollapsible): MutableRefObject<HTMLDivElement | null> => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement
      const isDesktop = window.innerWidth >= 1024

      if (ref.current && !ref.current.contains(targetElement) && isDesktop) {
        const otherMenuClicked = targetElement.closest(`#${targetId}`) !== null

        if (!otherMenuClicked && changeHeaderColors)
          changeHeaderColors({ openMenu: false })

        setOpenMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [setOpenMenu, targetId])

  return ref
}
