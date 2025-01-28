'use client'

import { ButtonScrollIndicator } from '@/components/generic/atoms/Tabination/TabinationButtonIndicator'
import { useInitCanScroll } from '@/hooks/useInitCanScroll'
import { twMerge } from 'tailwind-merge'
import { ITabinationWrapperButtons } from './TabinationWrapperButtons.interface'

const TabinationWrapperButtons = ({
  wrapperElementClassName,
  children,
}: ITabinationWrapperButtons): JSX.Element => {
  const { canScroll, scrollContainerRef } = useInitCanScroll()

  return (
    <nav className={twMerge('w-full relative', wrapperElementClassName)}>
      <div
        className={'flex items-center overflow-x-auto'}
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
