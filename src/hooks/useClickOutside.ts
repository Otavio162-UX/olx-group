'use client'

import { useEffect, useRef } from 'react'

interface IUseClickOutside {
  onClickOutside: VoidFunction
}

const useClickOutside = ({ onClickOutside }: IUseClickOutside) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClickOutside()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onClickOutside])

  return ref
}

export { useClickOutside }
