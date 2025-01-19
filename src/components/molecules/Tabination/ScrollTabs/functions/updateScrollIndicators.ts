import { Dispatch, SetStateAction } from 'react'
import { ICanScrollState } from '../ScrollTabs.interface'

interface IUpdateScrollIndicators {
  scrollContainerRef: React.RefObject<HTMLDivElement>
  setCanScroll: Dispatch<SetStateAction<ICanScrollState>>
}

export const updateScrollIndicators = ({
  scrollContainerRef,
  setCanScroll,
}: IUpdateScrollIndicators) => {
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
