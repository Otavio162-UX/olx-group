import { RefObject, useEffect, useRef, useState } from 'react'
import { ICanScrollState } from '../ScrollTabs.interface'
import { updateScrollIndicators } from '../functions/updateScrollIndicators'

interface IReturnUseInitScrollTabs {
  canScroll: ICanScrollState
  scrollContainerRef: RefObject<HTMLDivElement>
}

export const useInitScrollTabs = (): IReturnUseInitScrollTabs => {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const [canScroll, setCanScroll] = useState<ICanScrollState>({
    left: false,
    right: false,
  })

  useEffect(() => {
    updateScrollIndicators({ scrollContainerRef, setCanScroll })

    const container = scrollContainerRef.current

    if (container) {
      container.addEventListener('scroll', () =>
        updateScrollIndicators({ scrollContainerRef, setCanScroll })
      )
      window.addEventListener('resize', () =>
        updateScrollIndicators({ scrollContainerRef, setCanScroll })
      )

      return () => {
        container.removeEventListener('scroll', () =>
          updateScrollIndicators({ scrollContainerRef, setCanScroll })
        )
        window.removeEventListener('resize', () =>
          updateScrollIndicators({ scrollContainerRef, setCanScroll })
        )
      }
    }
  }, [])

  return {
    canScroll,
    scrollContainerRef,
  }
}
