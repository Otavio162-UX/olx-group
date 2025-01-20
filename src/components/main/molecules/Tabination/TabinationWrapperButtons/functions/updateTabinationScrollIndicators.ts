import { Dispatch, SetStateAction } from 'react'
import { ICanScrollState } from '../TabinationWrapperButtons.interface'

interface ITabinationUpdateScrollIndicators {
  scrollContainerRef: React.RefObject<HTMLDivElement>
  setCanScroll: Dispatch<SetStateAction<ICanScrollState>>
}

export const updateTabinationScrollIndicators = ({
  scrollContainerRef,
  setCanScroll,
}: ITabinationUpdateScrollIndicators) => {
  const container = scrollContainerRef.current
  if (container) {
    const marginOfError = 2

    setCanScroll({
      left: container.scrollLeft > 0,
      right:
        container.scrollLeft + container.clientWidth <
        container.scrollWidth - marginOfError,
    })
  }
}
