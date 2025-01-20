'use client'

import { ButtonScrollIndicator } from '@/components/main/atoms/Tabination/TabinationButtonIndicator'
import { ITabinationWrapperButtons } from './TabinationWrapperButtons.interface'
import { useInitTabinationWrapperButtons } from './hooks/useInitTabinationWrapperButtons'

const TabinationWrapperButtons = ({
  children,
}: ITabinationWrapperButtons): JSX.Element => {
  const { canScroll, scrollContainerRef } = useInitTabinationWrapperButtons()

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

export { TabinationWrapperButtons }
