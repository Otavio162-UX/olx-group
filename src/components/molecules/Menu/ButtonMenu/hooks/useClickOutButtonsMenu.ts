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

export interface IUseClickOutside {
  setOpenMenu: Dispatch<SetStateAction<boolean>>
  targetId?: string
  changeHeaderColors?: (props: IChangeHeaderColorsProps) => void
}

export const useClickOutButtonsMenu = ({
  setOpenMenu,
  targetId,
  changeHeaderColors,
}: IUseClickOutside): MutableRefObject<HTMLDivElement | null> => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const targetElement = event.target as HTMLElement

      if (ref.current && !ref.current.contains(targetElement)) {
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
