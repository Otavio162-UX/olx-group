import { RefObject, useEffect, useRef, useState } from 'react'
import { ICanScrollState } from '../TabinationWrapperButtons.interface'
import { updateTabinationScrollIndicators } from '../functions/updateTabinationScrollIndicators'

interface IReturnUseInitTabinationWrapperButtons {
  canScroll: ICanScrollState
  scrollContainerRef: RefObject<HTMLDivElement>
}

export const useInitTabinationWrapperButtons =
  (): IReturnUseInitTabinationWrapperButtons => {
    const scrollContainerRef = useRef<HTMLDivElement>(null)

    const [canScroll, setCanScroll] = useState<ICanScrollState>({
      left: false,
      right: false,
    })

    useEffect(() => {
      updateTabinationScrollIndicators({ scrollContainerRef, setCanScroll })

      const container = scrollContainerRef.current

      if (container) {
        container.addEventListener('scroll', () =>
          updateTabinationScrollIndicators({ scrollContainerRef, setCanScroll })
        )
        window.addEventListener('resize', () =>
          updateTabinationScrollIndicators({ scrollContainerRef, setCanScroll })
        )

        return () => {
          container.removeEventListener('scroll', () =>
            updateTabinationScrollIndicators({
              scrollContainerRef,
              setCanScroll,
            })
          )
          window.removeEventListener('resize', () =>
            updateTabinationScrollIndicators({
              scrollContainerRef,
              setCanScroll,
            })
          )
        }
      }
    }, [])

    return {
      canScroll,
      scrollContainerRef,
    }
  }
