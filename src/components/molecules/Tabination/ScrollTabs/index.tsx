'use client'

import { ButtonScrollIndicator } from '@/components/atoms/Tabination/ButtonScrollIndicator'
import { IScrollTabs } from './ScrollTabs.interface'
import { useInitScrollTabs } from './hooks/useInitScrollTabs'

const ScrollTabs = ({ children }: IScrollTabs): JSX.Element => {
  const { canScroll, scrollContainerRef } = useInitScrollTabs()

  return (
    <nav className="w-full relative mb-6">
      <div
        className="flex items-center overflow-x-auto"
        ref={scrollContainerRef}
      >
        {canScroll.left && <ButtonScrollIndicator variant="left" />}

        {children}

        {canScroll.right && <ButtonScrollIndicator variant="right" />}
      </div>
    </nav>
  )
}

export { ScrollTabs }
